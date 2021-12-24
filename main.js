let audio = null;
let musicFlag = false;

function creatSnow() {
  const el = document.createElement("div");
  el.classList.add('snow');
  el.style.marginLeft = randomPosition() + "px";
  document.body.appendChild(el);
}
function randomPosition() {
  return Math.floor(Math.random() * window.innerWidth);
}
for(let i = 0; i < 300; i++) {
  creatSnow();
}

// 노래
document.querySelector("#heart").addEventListener("click", function(){
  if (audio === null) {
    audio = new Audio('./music/Kelly Clarkson_Underneath the Tree.mp3');
  }

  if (musicFlag) {
    audio.pause();
    musicFlag = !musicFlag;
  } else {
    audio.play();
    audio.volume = 0.5;
    musicFlag = !musicFlag;
  }
})

// window.addEventListener("load", function() {
//   bootbox.alert('gd', function() {

//   });
// })