var card = new Image();
var n = 0;
var left1 = 54;
var left2 = 54;
var left3 = 54;
var left4 = 54;
var left =  left1 + left2 + left3 + left4
var blacklist = [];
var ctx = document.getElementById('ctx').getContext("2d");
card.onload = function (){
  ctx.drawImage(card, 0, 0,512,741);
};
card.src = `img/0.png`;
draw = function (deck){
  left =  left1 + left2 + left3 + left4;
  if (deck == 1 && left1 !== 0) {
    n = Math.floor(Math.random() * 54) + 1;
    while (blacklist.includes(n)) {
      n = Math.floor(Math.random() * 54) + 1;
    };
  blacklist.push(n);
  left1--
  }else if (deck == 2 && left2 !== 0) {
    n = Math.floor(Math.random() * 54) + 55;
    while (blacklist.includes(n)) {
      n = Math.floor(Math.random() * 54) + 55;
    };
  blacklist.push(n);
  left2--
  }else if (deck == 3 && left3 !== 0) {
    n = Math.floor(Math.random() * 54) + 109;
    while (blacklist.includes(n)) {
      n = Math.floor(Math.random() * 54) + 109;
    };
  blacklist.push(n);
  left3--
  }else if (deck == 4 && left4 !== 0) {
    n = Math.floor(Math.random() * 54) + 163;
    while (blacklist.includes(n)) {
      n = Math.floor(Math.random() * 54) + 163;
    };
  blacklist.push(n);
  left4--
  }else if (deck == 0 && left !== 0) {
    n = Math.floor(Math.random() * 216) + 1;
    while (blacklist.includes(n)) {
      n = Math.floor(Math.random() * 216) + 1;
    };
  blacklist.push(n);
  if (n < 55 && n  > 0) {
    left1--
  }else if (n < 110 && n > 54) {
    left2--
  }else if (n < 164 && n > 109) {
    left3--
  }else if (n < 217 && n > 163) {
    left4--
  }else {
    n = 0;
    }
    };
  ctx.drawImage(card, 0, 0,512,741);
  card.src = `img/${n}.png`;
};

extradirty.onclick =  function(e){
  draw(1)
};
lastcall.onclick =  function(e){
  draw(2)
};
happyhour.onclick =  function(e){
  draw(3)
};
ontherocks.onclick =  function(e){
  draw(4)
};
random.onclick =  function(e){
  draw(Math.floor(Math.random()* 4) + 1);
};
