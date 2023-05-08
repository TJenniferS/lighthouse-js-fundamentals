const judgeVegetable = function (vegetables, metric) {
  let highestValue = -Infinity;
  let submitterOfHighestValue = '';
  
  for (let i = 0; i < vegetables.length; i++) {
    const vegetable = vegetables[i];
    const value = vegetable[metric];
    
    if (value > highestValue) {
      highestValue = value;
      submitterOfHighestValue = vegetable.submitter;
    }
  }
  
  return submitterOfHighestValue;
};
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

const winner = judgeVegetable(vegetables, metric);

console.log(winner); // expected output: "Old Man Franklin"

