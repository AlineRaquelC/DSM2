import * as fs from 'fs';
import { parse } from 'csv-parse';

// Lê o CSV e devolve um array de strings contendo APENAS o nome de cada linha
async function lerCSV(caminhoArquivo: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
        const registros: string[] = [];

        const leitor = fs.createReadStream(caminhoArquivo)
            .pipe(parse({
                skip_empty_lines: true,
                delimiter: ',',
            }));

        leitor.on('data', (linha: string[]) => {
            const nome = linha[0]?.trim();
            if (nome) registros.push(nome);
        });

        leitor.on('end', () => resolve(registros));
        leitor.on('error', (erro) => reject(erro));
    });
}

function primeiraMaiuscula(nome: string): string {
    const preposicoes = ["de", "da", "das", "do", "dos", "e"];

    return nome
        .toLowerCase()
        .split(/\s+/)
        .map(parte => {
            if (preposicoes.includes(parte)) {
                return parte;
            }
            return parte.charAt(0).toUpperCase() + parte.slice(1);
        })
        .join(" ");
}

// Função principal
async function exemploUso() {
    const caminhoEntrada = './src/nomes.csv';
    const caminhoSaida = './src/nomesconv.csv';

    let csvString = "Nome\n";

    try {
        const dados = await lerCSV(caminhoEntrada);

        const linhas = dados[0].toLowerCase() === "nome"
            ? dados.slice(1)
            : dados;

        for (const nome of linhas) {
            const convertido = primeiraMaiuscula(nome);
            csvString += convertido + "\n";
        }

        fs.writeFileSync(caminhoSaida, csvString, 'utf-8');
        console.log("Arquivo CSV gravado com sucesso!");

    } catch (erro) {
        console.error('Erro ao processar o arquivo:', erro);
    }
}

exemploUso();
