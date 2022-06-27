export default interface IGameShoppingCar {
  id: number,
  title: string,
  price: number,
  audience: Array<number>,
  estimatedGameTime: Array<number>,
  age: Array<number>,
  amount?: number
  photoURL: string,
  addToCart: () => void,
  byInOneClick: () => void,
  sale?: number,
}
