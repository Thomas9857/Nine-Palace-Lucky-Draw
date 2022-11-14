//获取抽奖按钮
let startBtn = document.getElementById("startBtn");
//获取奖品项目的集合
let items = document.getElementsByClassName("item");
//获取奖品记录值
let record = document.getElementById('record');
//设置奖品滚动的顺序，即控制奖品转动的方向
let directionArr = [0, 1, 2, 4, 7, 6, 5, 3];
//抽奖的开关
let flag = true;
//抽到的奖品的数组下标
let awardIndex = 0;
//定义定时器标识符
let timer = null;

//1.点击抽奖按钮
startBtn.onclick = () => {
  //2.当抽奖开关为true时，可以点击抽奖
  if (flag) {
    //当抽奖开关为false时，处于抽奖状态中
    flag = false;
    //更换抽奖的状态-禁止点击抽奖
    startBtn.disabled = true;
    //3.定义定时器，转动奖品
    timer = setInterval(() => {
      //未转到的奖品的样式
      items[directionArr[awardIndex]].className = "item";
      //对奖品下标进行自增，实现奖品连在一起转动
      awardIndex++;
      //当奖品的下标超过数组下标时，赋值为0重新开始转圈
      if (awardIndex >= 8) {
        awardIndex = 0;
      }
      //转到的奖品的样式
      items[directionArr[awardIndex]].className += " active";
    }, 100);
  }
  //4.定义一个延时器，到时间则停止转动
  setTimeout(() => {
    //5.清理定时器，停止转动
    clearInterval(timer);
    //解除按钮的禁止状态
    startBtn.disabled = false;
    //开关值赋值为true
    flag = true;
    //定义奖品字符串
    let award = "";
    //6.获取抽奖的奖品下标来判断获取的奖品
    switch (directionArr[awardIndex]) {
        case 0: award = 'iphoneX'
        break;
        case 1: award = '再来一次'
        break;
        case 2: award = '百度网盘VIP'
        break;
        case 3: award = '牛排券'
        break;
        case 4: award = '纪念U盘'
        break;
        case 5: award = '瓶酒一扎'
        break;
        case 6: award = '谢谢参与'
        break;
        case 7: award = 'PS4 pro'
        break;
    }
    //7.对抽中的奖品进行记录
    record.innerHTML += "你抽到了" + award + '<br/>'
  }, Math.round(Math.random() * 3000) + 1000);
};