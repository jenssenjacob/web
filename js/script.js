
document.getElementById("personal-button").addEventListener("click", () => {
  document.getElementById("personal-message").style.display = "block";
});

// AOS init
AOS.init();

// Typed letter animation
const message = `Dear Abiya,

I just want you to know how much you mean to me. Every moment spent with you is a memory I cherish deeply.

Happy 20th Birthday! I hope this brings a smile to your face as big as the one you give me every day. 💖

With all my heart,
Someone who truly cares.`;

let index = 0;
const typedText = document.getElementById("typed-text");

function typeWriter() {
  if (index < message.length) {
    typedText.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter, 40);
  }
}

typeWriter();

// Heart Canvas Animation
const canvas = document.getElementById("heartCanvas");
if (canvas && canvas.getContext) {
  const ctx = canvas.getContext("2d");
  ctx.translate(200, 200);

  let k = 0;
  function drawHeart() {
    ctx.clearRect(-200, -200, 400, 400);
    ctx.beginPath();
    for (let x = -1.8; x <= 1.8; x += 0.01) {
      const y = Math.pow(Math.abs(x), 2 / 3) + 0.9 * Math.sin(k * x) * Math.sqrt(3 - x * x);
      ctx.lineTo(x * 100, -y * 100);
    }
    ctx.strokeStyle = `hsl(${k * 40}, 80%, 60%)`;
    ctx.lineWidth = 2;
    ctx.stroke();
    k += 0.05;
    requestAnimationFrame(drawHeart);
  }

  drawHeart();
}