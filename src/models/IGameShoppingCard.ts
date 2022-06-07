export default interface IGameShoppingCard{
  price: number,
  title: string,
  audience: string,
  estimatedGameTime: string,
  age: string,
  photoURL: string,
  addToCart: ()=> void,
  byInOneClick: ()=> void
}
