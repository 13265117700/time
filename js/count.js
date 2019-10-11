const PAGE = {
  data:{
//方法1
    index:0,
// 方法1
//     clock:true,
//     time:30
    
    clock:false,
    time:30
  },

  init:function(){
    this.bind();
  },

  bind:function(){
    let countBtn = document.getElementById('count-btn');
    countBtn.addEventListener('click',this.countTime);
  },
  
  addBtn:function(){
    let countNumber = document.getElementById('count-number');
//方法1.1
    let index = PAGE.data.index;
    PAGE.data.index = index +1;
    countNumber.innerHTML = PAGE.data.index; 
//方法1.2
    // countNumber.innerText = PAGE.data.index +=1;

    // let index = Number(countNumber.innerText);
    // countNumber.innerText = index +1;
  },
//方法1
  // countTime:function(){
  //   let clock = PAGE.data.clock;
  //   if(clock){
  //     PAGE.addBtn()
  //     PAGE.data.clock = false;
  //     let time = setInterval(function(){
  //       PAGE.data.time -= 1;
  //       let countTime = document.getElementById('count-time');
  //       countTime.value = PAGE.data.time + '秒';
  //       if(PAGE.data.time == 0){
  //         PAGE.data.clock = true;
  //         clearTimeout(time);  
  //         alert("时间到");
  //         PAGE.data.index = 0;
  //         PAGE.data.time =30;
  //         let countNumber = document.getElementById('count-number');
  //         countNumber.innerText = PAGE.data.index;
  //       }
  //     }, 1000);
  //   } else{
  //     PAGE.addBtn()
  //   }
  // }

  countTime:function(){
    let countTime = document.getElementById('count-time');
    if(!PAGE.data.clock){
      PAGE.addBtn()
      PAGE.data.clock = true;
      let time = setInterval(function(){
        PAGE.data.time -= 1;
        countTime.value = PAGE.data.time + '秒';
        if(PAGE.data.time == 0){
          PAGE.data.clock = false;
          clearTimeout(time);
          alert("时间到");
          PAGE.data.index = 0;
          PAGE.data.time =30;
          let countNumber = document.getElementById('count-number');
          countNumber.innerText = PAGE.data.index;
        }
      }, 1000);
    }else{
      PAGE.addBtn()
    }
  }
}
PAGE.init();