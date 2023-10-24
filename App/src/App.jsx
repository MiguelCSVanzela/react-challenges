import "./App.css";
import ClassComponent from "./components/1compProps/ClassComponent";
import Counter from "./components/1compProps/Counter";
import HelloWorld from "./components/1compProps/HelloWorld";
import MapProps from "./components/1compProps/MapProps";
import TakeProp from "./components/1compProps/TakeProp";
import ThreeProps from "./components/1compProps/ThreeProps";
import APISimulator from "./components/2estadoECiclo/APISimulator";
import Clock from "./components/2estadoECiclo/Clock";
import MultState from "./components/2estadoECiclo/MultState";
import ToDo from "./components/2estadoECiclo/ToDo";
import Toggle from "./components/2estadoECiclo/Toggle";
import VerifyWidth from "./components/2estadoECiclo/VerifyWidth";
import DinamicForm from "./components/3eventsForms/DinamicForm";
import FileUploader from "./components/3eventsForms/FileUploader";
import FormRegister from "./components/3eventsForms/FormRegister";
import ValidationForm from "./components/3eventsForms/ValidationForm";

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
      {/* <FormRegister /> */}
      {/* <ValidationForm /> */}
      <FileUploader />
    </>
  );
}

export default App;
