let touchStartTime, initX, distX, finX, delTime;
const touchStart = (e) => {
  touchStartTime = new Date().getTime();
  initX = e.changedTouches[0].clientX;
  distX = 0;
};
const touchEnd = (e) => {
  finX = e.changedTouches[0].clientX;
  delTime = new Date().getTime() - touchStartTime;
  distX = finX - initX;
  if (delTime > 150 && Math.abs(distX) > 50) {
    if (distX > 0) {
      //do something
    } else {
      //do something
    }
  }
};
//Attach these event listeners to touchstart and touch end events
