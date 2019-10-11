const PAGE = {
  data:{
    index:0,
    clock:true,
    time:6
  },
  init:function(){
    this.bind();
  },
  bind:function(){
    let countBtn = document.getElementById('count-btn');
    countBtn.addEventListener('click',this.countIime);
  },
  
  addBtn:function(){
    let countNumber = document.getElementById('count-number');
    countNumber.innerText = PAGE.data.index +=1;
    // let index = Number(countNumber.innerText);
    // countNumber.innerText = index + 1;
  },

  countIime:function(){
    let clock = PAGE.data.clock;
    if(clock){
      PAGE.addBtn()
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
          PAGE.data.time =6;
          let countNumber = document.getElementById('count-number');
          countNumber.innerText = PAGE.data.index;
        }
      }, 1000);
    } else{
      console.log(123)
      PAGE.addBtn()
    }
  }
}
PAGE.init();