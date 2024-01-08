export const createBoard = (size: number) => {
  const newBoard = [];

  for (let row = 1; row <= size; row++) {
    const newRow = [];

    for (let col = 1; col <= size; col++) {
      const cell = `item-${row}-${col}`;

      newRow.push(cell);
    }

    newBoard.push(newRow);
  }

  return newBoard;
};
