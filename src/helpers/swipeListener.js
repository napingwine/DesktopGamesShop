export default class swipeListener {
  startPoint = { x: undefined, y: undefined };
  nowPoint;
  ldelay;
  otk = { x: undefined };

  touchstart = (e) => {
    e.stopPropagation();
    this.startPoint.x = e.changedTouches[0].pageX;
    this.startPoint.y = e.changedTouches[0].pageY;
    this.ldelay = new Date();
  }

  touchmove = (event,) => {
    event.stopPropagation();
    this.nowPoint = event.changedTouches[0];
    this.otk.x = this.nowPoint.pageX - this.startPoint.x;
    /*Обработайте данные*/
    /*Для примера*/
    if (Math.abs(this.otk.x) > 200) {
      if (this.otk.x < 0) {/*СВАЙП ВЛЕВО(ПРЕД.СТРАНИЦА)*/ }
      if (this.otk.x > 0) {/*СВАЙП ВПРАВО(СЛЕД.СТРАНИЦА)*/ }
      this.startPoint = { x: this.nowPoint.pageX, y: this.nowPoint.pageY };
    }
  }

  touchend = (event, swipeLeft, swipeRight) => {
    let pdelay = new Date();
    this.nowPoint = event.changedTouches[0];
    let xAbs = Math.abs(this.startPoint.x - this.nowPoint.pageX);
    let yAbs = Math.abs(this.startPoint.y - this.nowPoint.pageY);
    if ((xAbs > 20 || yAbs > 20) && (pdelay.getTime() - this.ldelay.getTime()) < 200) {
      if (xAbs > yAbs) {
        if (this.nowPoint.pageX < this.startPoint.x) {
          swipeLeft()/*СВАЙП ВЛЕВО*/
        } else {
          swipeRight()/*СВАЙП ВПРАВО*/
        }
      }
      else {
        if (this.nowPoint.pageY < this.startPoint.y) {/*СВАЙП ВВЕРХ*/ }
        else {/*СВАЙП ВНИЗ*/ }
      }
    }
  }
}
