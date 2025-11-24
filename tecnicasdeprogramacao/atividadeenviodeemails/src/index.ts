import * as fs from 'node:fs';
import { parse } from 'csv-parse';
import nodemailer from 'nodemailer';
import DataUtil from './DataUtil';
import 'dotenv/config';

// -----------------------------------------------------
// Tipagem correta para as linhas do CSV
// -----------------------------------------------------
interface PessoaCSV {
    Nome: string;
    Email: string;
    Nasc: string;
}

// -----------------------------------------------------
// Leitura do CSV
// -----------------------------------------------------
async function lerArq(caminhoArquivo: string): Promise<PessoaCSV[]> {
    return new Promise((resolve, reject) => {
        const registros: PessoaCSV[] = [];

        const leitor = fs.createReadStream(caminhoArquivo)
            .pipe(parse({
                columns: true,
                skip_empty_lines: true,
                delimiter: ";"
            }));

        leitor.on("data", (linha) => registros.push(linha as PessoaCSV));
        leitor.on("end", () => resolve(registros));
        leitor.on("error", (err) => reject(err));
    });
}

// -----------------------------------------------------
// Função principal
// -----------------------------------------------------
async function main() {
    const caminhoCSV = './src/emails.csv';
    const caminhoHTML = './src/Mensagem.html';

    const htmlModelo = fs.readFileSync(caminhoHTML, 'utf-8');
    const linhasHTML = htmlModelo.split('\n');

    const linhasCSV = await lerArq(caminhoCSV);

    for (const dados of linhasCSV) {
        let htmlemail = "";

        for (const linha of linhasHTML) {

            // Substituir {{nome}}
            if (linha.includes('{{nome}}')) {
                htmlemail += linha.replace('{{nome}}', dados.Nome) + '\n';
                continue;
            }

            // Substituir {{percdesc}} (idade = % de desconto)
            if (linha.includes('{{percdesc}}')) {
                const desconto = idade(dados.Nasc);
                htmlemail += linha.replace('{{percdesc}}', desconto.toString()) + '\n';
                continue;
            }

            // Substituir {{mesquevem}}
            if (linha.includes('{{mesquevem}}')) {
                let hoje = new Date();
                let proximoMes = hoje.getMonth() + 2; // mês que vem

                if (proximoMes > 12) proximoMes = 1;

                const mesExtenso = DataUtil.mesExtenso(proximoMes);

                htmlemail += linha.replace('{{mesquevem}}', mesExtenso) + '\n';
                continue;
            }

            htmlemail += linha + '\n';
        }

        await enviarEmail(
            dados.Nome,
            dados.Email,
            "Oferta especial para você!",
            htmlemail
        );
    }
}

// -----------------------------------------------------
// Função de envio de e-mail
// -----------------------------------------------------
async function enviarEmail(destinatario: string, email: string, assunto: string, corpo: string) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mensagem = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: assunto,
        html: corpo
    };

    await transporter.sendMail(mensagem);

    console.log(`Email enviado para: ${destinatario} <${email}>`);
}

// -----------------------------------------------------
// Cálculo da idade
// -----------------------------------------------------
function idade(nasc: string): number {
    const hoje = new Date();

    const partes = nasc.split("/");

    const diaStr = partes[0] ?? "";
    const mesStr = partes[1] ?? "";
    const anoStr = partes[2] ?? "";

    const dia = parseInt(diaStr, 10);
    const mes = parseInt(mesStr, 10);
    const ano = parseInt(anoStr, 10);

    if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
        throw new Error(`Data de nascimento inválida: "${nasc}"`);
    }

    const datan = new Date(ano, mes - 1, dia);

    let idade = hoje.getFullYear() - datan.getFullYear();
    const mesDif = hoje.getMonth() - datan.getMonth();

    if (mesDif < 0 || (mesDif === 0 && hoje.getDate() < datan.getDate())) {
        idade--;
    }

    return idade;
}


// Executa o programa
main().catch(err => {
    console.error("Erro fatal:", err.message);
});

console.log("Teste idade 1:", idade("01/01/2000"));  // Deve dar algo perto de 25
console.log("Teste idade 2:", idade("10/03/1990"));  // Deve dar algo perto de 35
console.log("Teste idade 3:", idade("29/11/2024"));  // Bebê / 1 ano dependendo da data

