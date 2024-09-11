let timeLook = document.getElementById("time");
function time(){

  let date = new Date();
  let hours = date.getHours().toString().padStart(2, 0);
  let minutes = date.getMinutes().toString().padStart(2, 0);
  let seconds = date.getSeconds().toString().padStart(2, 0);

  timeLook.textContent = hours + ':' + minutes + ':' + seconds;

}
time();
setInterval(time, 1000);