function clock() {
  let hours = document.getElementById('hour');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');
  let ampm = document.getElementById('ampm');

  let hoursTime = new Date().getHours();
  let minutesTime = new Date().getMinutes();
  let secondsTime = new Date().getSeconds();
  let am = 'AM';

  // Convert am->pm
  if (hoursTime > 12) {
    hoursTime = hoursTime - 12;
    am = 'PM';
  }

  // Add 0 to the beginning of numbers if less than 10
  hoursTime = hoursTime < 10 ? '0' + hoursTime : hoursTime;
  minutesTime = minutesTime < 10 ? '0' + minutesTime : minutesTime;
  secondsTime = secondsTime < 10 ? '0' + secondsTime : secondsTime;

  hours.innerHTML = hoursTime;
  minutes.innerHTML = minutesTime;
  seconds.innerHTML = secondsTime;
  ampm.innerHTML = am;
}

const interval = setInterval(clock, 1000);
