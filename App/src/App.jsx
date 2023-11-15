import "./App.css";
import Counter from "./components/statemanagement/Counter";
import { Provider } from "react-redux";
import store from "./store";
// import { Outlet } from "react-router-dom";
// import NavBar from "./components/routing/NavBar";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Outlet />
//     </div>
//   );
// }

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
