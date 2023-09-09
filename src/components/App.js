import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 12, packed: true },
// ];

// MAIN APP*****************
export default function App() {
  // STATE
  const [items, setItems] = useState([]);

  // EVENT HANDLER
  // This function gets called in the FORM component when the "ADD" button is clicked
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  //onToggledItem
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        // create new object based on current item and set packed to oppisite
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // Clear list
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggledItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
