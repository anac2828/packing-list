export default function Stats({ items }) {
  // This is an example of derived state. There is no need for the component to have its owen state because the values can be calculated from the app state.
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  if (!items.length)
    return (
      <p className='stats'>
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? 'You got everything! Ready to go ✈️'
          : `🧳You have ${
              numItems > 0 ? numItems : 0
            } items on your list, and you
        already packed ${numPackedItems} ${percentage}%`}
      </em>
    </footer>
  );
}
