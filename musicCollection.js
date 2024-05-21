console.log("Задание 1 - Музыкальная коллекция");
console.log("");
// Функция-генератор для итератора музыкальной коллекции
function* albumIterator(albums) {
  let index = 0;
  while (index < albums.length) {
    yield albums[index];
    index++;
  }
}

// Объект "Музыкальная коллекция" c массивом альбомов и свойством Symbol.iterator
const musicCollection = {
  albums: [
    {
      title: "POWER UP",
      artist: "ACϟDC",
      year: "2020",
    },
    {
      title: "Ballistic, Sadistic",
      artist: "Annihilator",
      year: "2020",
    },
    {
      title: "N.A.T.I.O.N",
      artist: "Bad Wolves",
      year: "2019",
    },
    {
      title: "Hexed",
      artist: "Children Of Bodom",
      year: "2019",
    },
    {
      title: "Shapeshifting",
      artist: "Joe Satriani",
      year: "2020",
    },
    {
      title: "Essentials",
      artist: "Metallica",
      year: "2018",
    },
    {
      title: "Mercy, Please Mercy!",
      artist: "Nobody.one",
      year: "2020",
    },
    {
      title: "What The Dead Men Say",
      artist: "Trivium",
      year: "2020",
    },
  ],
  // Свойство-символ Symbol.iterator для доступа к итератору
  [Symbol.iterator]: function () {
    return albumIterator(this.albums);
  },
};

// Цикл для перебора альбомов в музыкальной коллекции и вывода их на консоль
for (let album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
console.log("");
