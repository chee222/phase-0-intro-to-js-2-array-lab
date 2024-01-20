// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Milo) {
    cats.push(Milo);
  }

  function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
  }
  function destructivelyRemoveLastCat(Milo, Otis) {
    cats.pop(Milo, Otis);
  }

  function destructivelyRemoveFirstCat(Otis, Garfield) {
    cats.shift(Otis, Garfield);
  }

  function appendCat(Broom) {
    return cats.concat(Broom);
  }

  function prependCat(Arno) {
    return [Arno, ...cats];
  }
  function removeLastCat() {
    return cats.slice(0, -1);
  }
  function removeFirstCat() {
    return cats.slice(1);
  }