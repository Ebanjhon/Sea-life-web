function runFishSprite(options) {
  const el = document.querySelector(options.selector);

  // ====== FRAME GỐC ======
  const ORIGINAL_W = 640;
  const ORIGINAL_H = 480;

  // ====== OPTIONS ======
  const width = options.width;
  const height = width * (ORIGINAL_H / ORIGINAL_W);

  const frameCount = options.frameCount;

  const minSpeed = options.minSpeed ?? 0.5;
  const maxSpeed = options.maxSpeed ?? 3;

  const minFPS = options.minFPS ?? 6;
  const maxFPS = options.maxFPS ?? 16;

  const turnChance = options.turnChance ?? 0.01;
  const turnStrength = options.turnStrength ?? 0.5;

  const yFactor = options.yFactor ?? 0.4; // < 1 → giảm Y

  // ====== SET SIZE ======
  el.style.width = width + "px";
  el.style.height = height + "px";

  // ====== FRAME ANIMATION ======
  let frame = 0;
  let lastFrameTime = 0;

  // ====== MOVEMENT ======
  let x = Math.random() * (window.innerWidth - width);
  let y = Math.random() * (window.innerHeight - height);

  let speed = random(minSpeed, maxSpeed);
  let angle = Math.random() * Math.PI * 2;

  function animate(time) {
    // ===== FPS phụ thuộc SPEED =====
    const fps =
      minFPS +
      (speed - minSpeed) / (maxSpeed - minSpeed) * (maxFPS - minFPS);

    const frameInterval = 1000 / fps;

    if (time - lastFrameTime > frameInterval) {
      el.style.backgroundPosition = `-${frame * width}px 0px`;
      frame = (frame + 1) % frameCount;
      lastFrameTime = time;
    }

    // ===== MOVE =====
    x += Math.cos(angle) * speed;
    y += Math.sin(angle) * speed * yFactor;

    const minX = -width;
    const maxX = window.innerWidth;
    const minY = -height;
    const maxY = window.innerHeight;

    if (x <= minX || x >= maxX) {
      angle = Math.PI - angle;
    }

    if (y <= minY || y >= maxY) {
      angle = -angle;
    }

    // Lật cá theo hướng bơi
    if (Math.cos(angle) > 0) {
      el.style.transform = "scaleX(-1)";
    } else {
      el.style.transform = "scaleX(1)";
    }

    el.style.left = x + "px";
    el.style.top = y + "px";

    // ===== RANDOM BEHAVIOR =====
    if (Math.random() < turnChance) {
      angle += random(-turnStrength, turnStrength);
      speed = random(minSpeed, maxSpeed);
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

// ===== HELPER =====
function random(min, max) {
  return Math.random() * (max - min) + min;
}

runFishSprite({ selector: "#sprite1", width: 100, frameCount: 40, minSpeed: 0.6, maxSpeed: 0.8, minFPS: 8, maxFPS: 12, turnChance: 0.01, turnStrength: 0.3, yFactor: 0.35 });
runFishSprite({ selector: "#sprite2", width: 100, frameCount: 40, minSpeed: 0.6, maxSpeed: 0.8, minFPS: 8, maxFPS: 12, turnChance: 0.01, turnStrength: 0.3, yFactor: 0.35 });
runFishSprite({ selector: "#sprite3", width: 100, frameCount: 40, minSpeed: 0.6, maxSpeed: 0.8, minFPS: 8, maxFPS: 12, turnChance: 0.01, turnStrength: 0.3, yFactor: 0.35 });
runFishSprite({ selector: "#sprite4", width: 100, frameCount: 40, minSpeed: 0.6, maxSpeed: 0.8, minFPS: 8, maxFPS: 12, turnChance: 0.01, turnStrength: 0.3, yFactor: 0.35 });
runFishSprite({ selector: "#sprite5", width: 100, frameCount: 40, minSpeed: 0.6, maxSpeed: 0.8, minFPS: 8, maxFPS: 12, turnChance: 0.01, turnStrength: 0.3, yFactor: 0.35 });
runFishSprite({ selector: "#sprite6", width: 100, frameCount: 40, minSpeed: 0.6, maxSpeed: 0.8, minFPS: 8, maxFPS: 12, turnChance: 0.01, turnStrength: 0.3, yFactor: 0.35 });
runFishSprite({ selector: "#sprite7", width: 100, frameCount: 40, minSpeed: 0.6, maxSpeed: 0.8, minFPS: 8, maxFPS: 12, turnChance: 0.01, turnStrength: 0.3, yFactor: 0.35 });
runFishSprite({ selector: "#sprite8", width: 100, frameCount: 40, minSpeed: 0.6, maxSpeed: 0.8, minFPS: 8, maxFPS: 12, turnChance: 0.01, turnStrength: 0.3, yFactor: 0.35 });
runFishSprite({ selector: "#sprite9", width: 100, frameCount: 40, minSpeed: 0.6, maxSpeed: 0.8, minFPS: 8, maxFPS: 12, turnChance: 0.01, turnStrength: 0.3, yFactor: 0.35 });
runFishSprite({ selector: "#sprite10", width: 100, frameCount: 40, minSpeed: 0.6, maxSpeed: 0.8, minFPS: 8, maxFPS: 12, turnChance: 0.01, turnStrength: 0.3, yFactor: 0.35 });
runFishSprite({ selector: "#sprite11", width: 100, frameCount: 40, minSpeed: 0.6, maxSpeed: 0.8, minFPS: 8, maxFPS: 12, turnChance: 0.01, turnStrength: 0.3, yFactor: 0.35 });
runFishSprite({ selector: "#sprite12", width: 100, frameCount: 40, minSpeed: 0.6, maxSpeed: 0.8, minFPS: 8, maxFPS: 12, turnChance: 0.01, turnStrength: 0.3, yFactor: 0.35 });
runFishSprite({ selector: "#sprite13", width: 100, frameCount: 40, minSpeed: 0.6, maxSpeed: 0.8, minFPS: 8, maxFPS: 12, turnChance: 0.01, turnStrength: 0.3, yFactor: 0.35 });
runFishSprite({ selector: "#sprite14", width: 100, frameCount: 40, minSpeed: 0.6, maxSpeed: 0.8, minFPS: 8, maxFPS: 12, turnChance: 0.01, turnStrength: 0.3, yFactor: 0.35 });
