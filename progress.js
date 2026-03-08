function loadProgress() {
  let data = JSON.parse(localStorage.getItem("fitnessData")) || {
    points: 0, level: 1, streak: 0,
    workouts: 0, exercises: 0, minutes: 0
  };

  document.getElementById("level").innerText = data.level;
  document.getElementById("currentPoints").innerText = data.points % 500;
  document.getElementById("totalPoints").innerText = data.points;
  document.getElementById("streak").innerText = data.streak;
  document.getElementById("workouts").innerText = data.workouts;
  document.getElementById("exercises").innerText = data.exercises;
  document.getElementById("minutes").innerText = data.minutes;

  document.getElementById("progressFill").style.width = ((data.points % 500) / 5) + "%";

  if (data.workouts >= 1) document.getElementById("badge1").classList.add("unlocked");
  if (data.points >= 100) document.getElementById("badge2").classList.add("unlocked");
  if (data.points >= 2000) document.getElementById("badge3").classList.add("unlocked");
}

loadProgress();