function chooseStations(stations) {
  let goodStations = [];
  for (let i = 0; i < stations.length; i++) {
    let station = stations[i];
    let capacity = station[1];
    let venue = station[2];
    if (capacity >= 20 && (venue === "school" || venue === "community centre")) {
      goodStations.push(station[0]);
    }
  }
  return goodStations;
}

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"]
];

console.log(chooseStations(stations));