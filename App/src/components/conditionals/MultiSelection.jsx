import { useState } from "react";

const MultiSelection = () => {
  const [items, setItems] = useState([
    { id: 123, value: "Value 1", isSelected: false },
    { id: 124, value: "Value 2", isSelected: false },
    { id: 144, value: "Value 3", isSelected: false },
  ]);

  const itemsCount = items.filter((item) => item.isSelected === true).length;

  const handleClick = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  const handleSelect = () => {
    if (itemsCount > 0) {
      setItems(items.map((item) => ({ ...item, isSelected: false })));
    } else {
      setItems(items.map((item) => ({ ...item, isSelected: true })));
    }
  };

  return (
    <>
      <button onClick={handleSelect}>
        {itemsCount > 0 ? "Desmarcar todos" : "Marcar Todos"}
      </button>
      <h2>Há {itemsCount} item(s) selecionados</h2>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            style={{ background: item.isSelected ? "lightgreen" : "none" }}
            onClick={() => handleClick(item.id)}
          >
            {item.value}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MultiSelection;
