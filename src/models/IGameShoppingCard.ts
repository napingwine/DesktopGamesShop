export default interface IGameShoppingCard{
  price: string,
  name: string,
  audience: string,
  estimatedGameTime: string,
  age: string,
  photoURL: string,
  addToCart: ()=> void,
  byInOneClick: ()=> void
}
