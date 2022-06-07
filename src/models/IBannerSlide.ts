export interface IBannerSlide {
  className?: string,
  title : string,
  subTitle: string,
  imgURL: string,
  listener: () => void
}