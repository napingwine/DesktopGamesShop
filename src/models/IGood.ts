export interface IGood {
  id: number,
  title: string,
  price: number,
  audience: Array<number>,
  estimatedGameTime: Array<number>,
  age: Array<number>,
  photoURL: string,
  amount: number,
  sale?: number
}