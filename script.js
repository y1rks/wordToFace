// canvas用変数
let canvas;
let ctx;

// 描画位置
const eyeHeight = 50;
const mouthHeight = 250;
const eyeLength = 180;
const leftEyeStartPoint = 10;
const rightEyeStartPoint = 300;

function changeWords() {
  target = document.getElementById("word");
  target.textContent = wordList[Math.floor(Math.random() * wordList.length)];

  // canvas処理
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineCap = "round";

  // 左目
  ctx.strokeStyle = "black";
  ctx.lineWidth = 15;
  ctx.beginPath();
  ctx.moveTo(leftEyeStartPoint, eyeHeight);
  ctx.quadraticCurveTo(
    leftEyeStartPoint + eyeLength / 2,
    200,
    leftEyeStartPoint + eyeLength,
    eyeHeight
  );
  ctx.stroke();

  // 右目
  ctx.strokeStyle = "black";
  ctx.lineWidth = 15;
  ctx.beginPath();
  ctx.moveTo(rightEyeStartPoint, eyeHeight);
  ctx.quadraticCurveTo(
    rightEyeStartPoint + eyeLength / 2,
    200,
    rightEyeStartPoint + eyeLength,
    eyeHeight
  );
  ctx.stroke();

  // 口
  ctx.strokeStyle = "black";
  ctx.lineWidth = 15;
  ctx.beginPath();
  ctx.moveTo(leftEyeStartPoint + eyeLength / 2, mouthHeight);
  ctx.quadraticCurveTo(
    100,
    mouthHeight,
    rightEyeStartPoint + eyeLength / 2,
    mouthHeight
  );
  ctx.stroke();
}

document.addEventListener("DOMContentLoaded", function () {
  // 初期化
  target2 = document.getElementById("word");
  target2.textContent = wordList[Math.floor(Math.random() * wordList.length)];

  // canvas初期化
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  // Canvas のサイズをクライアントサイズに合わせる
  canvas.width = document.documentElement.clientWidth / 2;
  canvas.height = document.documentElement.clientHeight / 2;

  // loop開始
  setInterval(changeWords, 1000);
});
