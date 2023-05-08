const director = "Steven Spielberg";
const films = ["Jaws", "Raiders of the Lost Ark", "A.I."];

films[2] = "Jurassic Park";
films;
films.push("A.I.");
films;
director + " is the director of " + films.length + " films";
films.push("E.T.");

// Assign the updated string to a variable
const updatedString = director + " is the director of " + films.length + " films";
console.log(updatedString);
console.log(films);
