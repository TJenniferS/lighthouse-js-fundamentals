function finalPosition(moves) {
  let position = [0, 0]; // start at [0, 0]

  // loop through each move and update position accordingly
  for (let move of moves) {
    if (move === 'north') {
      position[1] += 1; // move one space north (increment y coordinate)
    } else if (move === 'south') {
      position[1] -= 1; // move one space south (decrement y coordinate)
    } else if (move === 'east') {
      position[0] += 1; // move one space east (increment x coordinate)
    } else if (move === 'west') {
      position[0] -= 1; // move one space west (decrement x coordinate)
    }
  }

  return position;
}
