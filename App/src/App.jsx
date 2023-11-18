import "./App.css";
import Counter from "./components/statemanagement/Counter";
import { Provider } from "react-redux";
import store from "./store";
import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./components/statemanagement/TaskForm";
import TaskList from "./components/statemanagement/TaskList";
// import { Outlet } from "react-router-dom";
// import NavBar from "./components/routing/NavBar";
import postStore from "./context/posts/store";
import PostList from "./components/statemanagement/PostList";
import MyForm from "./components/statemanagement/MyForm";
function App() {
  return (
    // <Provider store={store}>
    //   <Counter />
    // </Provider>
    // <TaskProvider>
    //   <TaskForm />
    //   <TaskList />
    // </TaskProvider>

    // <Provider store={postStore}>
    //   <PostList />
    // </Provider>
    <MyForm />
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
