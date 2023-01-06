(() => {
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  const setEle = (id, text) => {
    const ele = document.getElementById(id).innerText = text
  }

  const countDown = () => {
    const now = new Date().getTime()
    const newYear = new Date('December 31, 2023 23:59:59').getTime()
    const diffTime = newYear-now

    // element 
    setEle('days', Math.floor(diffTime / day))
    setEle('hours', Math.floor(diffTime % day / hour))
    setEle('minutes', Math.floor(diffTime  % day % hour / minute))
    setEle('seconds', Math.floor(diffTime  % day % hour % minute / second))
   
  }


  const run = () => {
    countDown()
    setInterval(countDown, second)
  }

  run()
})();
