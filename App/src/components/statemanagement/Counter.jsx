import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../../context/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Valor do contador: {count}</h2>
      <button onClick={() => dispatch(increment())}>Aumentar</button>
      <button onClick={() => dispatch(decrement())}>Diminuir</button>
      <button onClick={() => dispatch(reset())}>Resetar</button>
    </>
  );
};

export default Counter;
