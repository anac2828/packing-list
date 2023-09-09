import { useState } from "react";

export default function Form({ onAddItems }) {
  // CONTROLLED ELEMENT TECHNIQUE
  // 1 Create state for the input field
  //2 Use the state as the value for the input field
  //3 Connect the state to the input field using the onChange event

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // EVENT HANDLER
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* First part creates an array from 1 to 20 and the map will output the option with a number based on the length of the first array */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
