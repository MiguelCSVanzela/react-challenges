import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/5Roteamento/NavBar";
function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
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
