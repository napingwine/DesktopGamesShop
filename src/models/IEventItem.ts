export default interface IEventItem {
  id: number,
  photoURL: string,
  title: string,
  description: string[],
  date: string,
  time: string
  price?: number,
  listener?: ()=> void
}