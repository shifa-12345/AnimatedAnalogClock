let hours = document.getElementsByClassName("hours")[0];

let minute = document.getElementsByClassName("minute")[0];

let seconds = document.getElementsByClassName("seconds")[0];

setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;
  const moveSound = new Audio("sound.mp3");
  moveSound.play();

  hours.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  seconds.style.transform = `rotate(${srotation}deg)`;
}, 1000);
