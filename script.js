// canvas用変数
let canvas;
let ctx;
let canvasWidth;
let canvasHeight;

// 顔の定義
let leftEyeCenterPoint;
let rightEyeCenterPoint;
let mouthCenterPoint;

// 描画位置
const eyeHeight = 100;
const mouthHeight = 300;
const eyeHalfLength = 90;
const mouthHalfLength = 150;

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
  ctx.moveTo(leftEyeCenterPoint - eyeHalfLength, eyeHeight);
  ctx.quadraticCurveTo(
    leftEyeCenterPoint,
    180,
    leftEyeCenterPoint + eyeHalfLength,
    eyeHeight
  );
  ctx.stroke();

  // 右目
  ctx.strokeStyle = "black";
  ctx.lineWidth = 15;
  ctx.beginPath();
  ctx.moveTo(rightEyeCenterPoint - eyeHalfLength, eyeHeight);
  ctx.quadraticCurveTo(
    rightEyeCenterPoint,
    180,
    rightEyeCenterPoint + eyeHalfLength,
    eyeHeight
  );
  ctx.stroke();

  // 口
  ctx.strokeStyle = "black";
  ctx.lineWidth = 15;
  ctx.beginPath();
  ctx.moveTo(mouthCenterPoint - mouthHalfLength, mouthHeight);
  ctx.quadraticCurveTo(
    mouthCenterPoint,
    mouthHeight,
    mouthCenterPoint + mouthHalfLength,
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
  canvasWidth = document.documentElement.clientWidth / 2;
  canvasHeight = document.documentElement.clientHeight / 4;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  leftEyeCenterPoint = canvasWidth * (1 / 4);
  rightEyeCenterPoint = canvasWidth * (3 / 4);
  mouthCenterPoint = canvasWidth * (1 / 2);

  // loop開始
  setInterval(changeWords, 1000);
});
