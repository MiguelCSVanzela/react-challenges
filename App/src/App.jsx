import "./App.css";
import ClassComponent from "./components/1compProps/ClassComponent";
import Counter from "./components/1compProps/Counter";
import HelloWorld from "./components/1compProps/HelloWorld";
import MapProps from "./components/1compProps/MapProps";
import TakeProp from "./components/1compProps/TakeProp";
import ThreeProps from "./components/1compProps/ThreeProps";
import Clock from "./components/2estadoECiclo/Clock";
import MultState from "./components/2estadoECiclo/MultState";
import ToDo from "./components/2estadoECiclo/ToDo";
import Toggle from "./components/2estadoECiclo/Toggle";

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

function App() {
  return (
    <>
      {/* <Toggle /> */}
      {/* <MultState /> */}
      {/* <Clock /> */}
      <ToDo />
    </>
  );
}

export default App;
