const PAGE = {
  data:{
    index:0,
    time:30,
    clock:true
  },

  init:function(){
    this.bind()
  },

  bind:function(){
    let countBtn = document.getElementById('count-btn');
    countBtn.addEventListener('click',function(){
      let clock = PAGE.data.clock;
      if(clock){
        let countNumber = document.getElementById('count-number');
        countNumber.innerText = PAGE.data.index +=1;
        PAGE.data.clock = false;
        let time = setInterval(function(){
          PAGE.data.time -= 1;
          let countTime = document.getElementById('count-time');
          console.log(countTime)
          countTime.value = PAGE.data.time + '秒';
          if(PAGE.data.time == 0){
            PAGE.data.clock = true;
            clearTimeout(time);  
            alert("时间到");  
            PAGE.data.index = 0;
            PAGE.data.time =30;
            let countNumber = document.getElementById('count-number');
            countNumber.innerText = PAGE.data.index;
          }
        }, 1000);
      } else{
        let countNumber = document.getElementById('count-number');
        countNumber.innerText = PAGE.data.index +=1;
      }
    })
  },
}
PAGE.init();