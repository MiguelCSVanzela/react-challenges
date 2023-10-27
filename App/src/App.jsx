import "./App.css";
import Button from "./components/4estilizacao/Button";
import HelloWorld from "./components/4estilizacao/HelloWorld";
import LightDark from "./components/4estilizacao/LightDark";
import SassComponent from "./components/4estilizacao/SassComponent";
import StyleComponent from "./components/4estilizacao/StyleComponent";
function App() {
  return (
    <div>
      {/* <HelloWorld /> */}
      {/* <Button /> */}
      {/* <LightDark /> */}
      {/* <StyleComponent /> */}
      <SassComponent
        title="Meu Elemento Com SASS"
        content="Todo o Conteudo que precisas saber"
      />
    </div>
  );
}

export default App;

// const members = [
//   {
//     id: 1,
//     name: "Miguel",
//     profissao: "Engenheiro de software"
//   },
//   {
//     id: 2,
//     name: "Ariel",
//     profissao: "Engenheiro de Qualidade"
//   },
//   {
//     id: 3,
//     name: "Vitor",
//     profissao: "Gamer"
//   }
// ]
