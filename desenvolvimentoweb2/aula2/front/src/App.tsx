import { useState, type CSSProperties } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState<Person[]>([]);

  function handleSave() {
    const user = { name, age };
    setUsers((prev) => [user, ...prev]);
    setName("");
    setAge("");
  }

  function handleRemove (indice: number){
    const temp = [...users];
    temp.splice(indice,1);
    setUsers(temp);
  }

  return (
    <div>
      <label htmlFor="nome">Nome</label>
      <input id="nome" value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        <label htmlFor="idade">Idade</label>
        <input id="idade" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <button onClick={handleSave}>Salvar</button>
      <table style={table}>
        <thead>
          <tr>
            <th style={cell}>Nome</th>
            <th style={cell}>Idade</th>
          </tr>
        </thead>
        <tbody>
          {users.map(function (item, indice) {
            return (
              <tr key={indice} onClick={() => handleRemove(indice)}>
                <td style={cell}>{item.name}</td>
                <td style={cell}>{item.age}</td>
              </tr>
            );
          })
          }
        </tbody>
      </table>
    </div>
  );

}

interface Person {
  name: string;
  age: string;
}

const table: CSSProperties = {
  tableLayout: "auto", // a largura da tabela se ajusta ao conteúdo
  borderCollapse: "collapse",
  marginTop: "20px",
};
const cell: CSSProperties = {
  border: "1px solid black",
  padding: "5px",
  whiteSpace: "nowrap", // garante que o conteúdo não quebre em várias linhas
};
