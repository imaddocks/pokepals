const eventDate = new Date('January 14, 2025 18:30:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  if (timeLeft <= 0) {
    document.getElementById('updateCountdown').innerText = "The event is live!";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('updateCountdown').innerText = 
    `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

document.getElementById("current-year").textContent = new Date().getFullYear();