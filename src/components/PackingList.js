import { useState } from 'react';
import Item from './Item';

// PACKING LIST*****************
export default function PackingList({
  items,
  onDeleteItem,
  onToggledItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  // default initial sortByState
  if (sortBy === 'input') sortedItems = items;

  // use slice so that original array is not changed
  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggledItem={onToggledItem}
          />
        ))}
      </ul>
      {/* sort options */}
      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
        {/* CLEAR LIST */}
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
