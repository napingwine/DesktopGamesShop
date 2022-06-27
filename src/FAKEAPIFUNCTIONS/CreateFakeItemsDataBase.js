import axios from "axios";
import _default from "dom-helpers";

let GoodItem = function (category, subCategory, title, price, amount, sale, audience, estimatedGameTime, age, photoURL, byOrder) {
  this.category = category;
  this.subCategory = subCategory;
  this.title = title;
  this.price = price;
  this.amount = amount;
  this.sale = sale;
  this.audience = audience;
  this.estimatedGameTime = estimatedGameTime;
  this.age = age;
  this.photoURL = photoURL;
  this.byOrder = byOrder;
}

const categories = [
  {
    'Настольные игры': [
      'Ролевые игры',
      'Игры для двоих',
      'Игры для компаний',
      'Стратегические игры',
      'Кооперативные игры',
      'Логические игры',
      'Игры для детей'
    ]
  },
  {
    'Magic: The Gathering': [
      'Иннистрад: Полночна Охота',
      'Приключения в Забытых Королевствах',
      'Иннистрад: Багровая Клятва',
      'Расцвет Зендикара',
      'Калдхайм',
      'Стриксхейвен',
      'Специальные выпуски',
      'Старые выпуски'
    ]
  },
  {
    'Варгеймы': [
      'Warhammer 40k',
      'Age of Sigmar',
      'Warcry',
      'Warcry Warhammer: Underworlds',
      'Killteam',
      'Necromunda',
      'Lord of the Rings',
      'Blood Bowl',
      'Titanicus',
      'Террейн',
      'Альтернативные миниатюры'
    ]
  },
  {
    'Краски': [
      'Citadel',
      'Bosny',
      'Vallejo',
      'Zip Maket'
    ]
  },
  {
    'Аксессуары для игр': [
      'Протекторы',
      'Альбомы',
      'Коробочки',
      'Кубики',
      'Коврики',
      'Мешочки'
    ]
  },
  {
    'Аксессуары для моделизма': [
      'Кисти',
      'Инструменты',
      'Декорации',
      'Подставки'
    ]
  }
]

const randomString = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta doloribus fugit beatae officia aperiam quae id quisquam dolores quia! Illum nesciunt molestiae adipisci debitis dolore, architecto doloribus, dicta aliquid totam rerum error tempora quaerat sequi mollitia! Alias doloribus laboriosam laudantium quod amet molestiae nostrum sint nihil? Deserunt ex harum quibusdam labore beatae porro, impedit similique quaerat non. Optio expedita eveniet quis distinctio doloremque similique quae, temporibus saepe esse dolorum a et vero. Corporis, doloribus totam aliquam voluptatum asperiores iusto excepturi officiis commodi! Dolorem enim saepe quasi ipsum nesciunt dolorum consequuntur reprehenderit cum voluptatum deleniti. Minima vel totam quod officiis eos.'
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const createRandomTitle = (someString) => {
  let stringLenght = getRandomNumber(4, 10);
  let result = [];
  let i = 0;

  while (i < stringLenght) {
    result.push(someString.split(' ')[getRandomNumber(0, someString.split(' ').length)])
    i++
  }
  return result.map(el => [...el].filter((el) => el != '.' && el != '!' && el != ',' && el != '?').join(''))
}

const getRandomArrayWithTwoNumbers = (min, max) => {
  let x = getRandomNumber(min, max)
  let y = getRandomNumber(min, max)
  if (x == y) {
    return [x, x + 1];
  }
  return [x, y].sort((a, b) => a - b);
}

const getRandomAgeRange = () => {
  let x = getRandomNumber(4, 20);
  let y = getRandomNumber(4, 20);
  if (x > 18 || y > 18) {
    return [18];
  } else {
    let arr = [x, y].sort((a, b) => a - b)
    return arr;
  }
}

const createNewItem = (categories) => {
  let x = 0;
  let dataForSend = []
  while (x < categories.length) {
    let i = 0;
    while (categories[x][Object.keys(categories[x])].length > i) {
      let category = Object.keys(categories[x])[0];
      let subCategory = categories[x][Object.keys(categories[x])][i];
      let title = createRandomTitle(randomString).join(' ');
      let price = getRandomNumber(1, 50000);
      let amount = getRandomNumber(1, 10);
      let sale = 0;
      if (Math.floor(Math.random() * 100) < 30) {
        sale = getRandomNumber(0, 95);
      }
      let audience = getRandomArrayWithTwoNumbers(1, 10);
      let estimatedGameTime = getRandomArrayWithTwoNumbers(10, 100);
      let age = getRandomAgeRange();
      let photoURL = `http://localhost:5000/shoppingCardImages/${getRandomNumber(1, 10)}.png`;
      let byOrder = getRandomAgeRange(1,100) < 10 ? true : false
      i++
      let data = new GoodItem(category, subCategory, title, price, amount, sale, audience, estimatedGameTime, age, photoURL, byOrder)

      dataForSend.push(data)
    }
    x++
  }

  for (let i = 0; i < dataForSend.length; i++) {
    setTimeout(() => {
      axios.post('http://localhost:5000/goods', dataForSend[i])
    }, i * 1000)
  }
}



export const doOnClick = () => {
  createNewItem(categories)
  // console.log(createRandomTitle(randomString))
}