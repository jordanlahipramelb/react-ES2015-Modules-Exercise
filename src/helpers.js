function choice(items) {
  let idx = Math.floor(Math.random() * items.length);
  let randomChoice = items[idx];
  return randomChoice;
}

// Removes item from items, returns remaining items
function remove(items, item) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      return [...items.slice(0, i), ...items.slice(i + 1)];
    }
  }
}

export { choice, remove };
