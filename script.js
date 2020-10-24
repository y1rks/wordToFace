// canvas用変数
let canvas;
let ctx;
let canvasWidth;
let canvasHeight;
let selectedIndex = 0;

// 顔の定義
let leftEyeCenterPoint;
let rightEyeCenterPoint;
let mouthCenterPoint;

// 描画位置
const eyeHeight = 100;
const mouthHeight = 300;
const eyeHalfLength = 80;
const mouthHalfLength = 150;
const eyeHeigthVariable = 80;

// 目の変動バリエーション
const eyeHeightCollection = [
  eyeHeight - eyeHeigthVariable,
  eyeHeight,
  eyeHeight + eyeHeigthVariable,
];

function changeWords() {
  target = document.getElementById("word");
  target.textContent = wordList[Math.floor(Math.random() * wordList.length)];

  // 目の位置を選ぶ
  const beforeSelectedIndex = selectedIndex;
  while (beforeSelectedIndex === selectedIndex) {
    selectedIndex = Math.floor(Math.random() * eyeHeightCollection.length);
  }

  const selectedEyeHeight = eyeHeightCollection[selectedIndex];

  // canvas処理

  // canvasの初期化
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 目玉
  if (selectedIndex !== 1) {
    ctx.beginPath();
    ctx.arc(
      leftEyeCenterPoint,
      eyeHeight,
      15,
      (0 * Math.PI) / 180,
      (360 * Math.PI) / 180,
      false
    );
    ctx.arc(
      rightEyeCenterPoint,
      eyeHeight,
      15,
      (0 * Math.PI) / 180,
      (360 * Math.PI) / 180,
      false
    );
    ctx.fill();
  }

  // 線の角を取る
  ctx.lineCap = "round";

  // 左目
  ctx.strokeStyle = "black";
  ctx.lineWidth = 18;
  ctx.beginPath();
  ctx.moveTo(leftEyeCenterPoint - eyeHalfLength, eyeHeight);
  ctx.quadraticCurveTo(
    leftEyeCenterPoint,
    selectedEyeHeight,
    leftEyeCenterPoint + eyeHalfLength,
    eyeHeight
  );
  ctx.stroke();

  // 右目
  ctx.strokeStyle = "black";
  ctx.lineWidth = 18;
  ctx.beginPath();
  ctx.moveTo(rightEyeCenterPoint - eyeHalfLength, eyeHeight);
  ctx.quadraticCurveTo(
    rightEyeCenterPoint,
    selectedEyeHeight,
    rightEyeCenterPoint + eyeHalfLength,
    eyeHeight
  );
  ctx.stroke();

  // 口
  // ctx.strokeStyle = "black";
  // ctx.lineWidth = 18;
  // ctx.beginPath();
  // ctx.moveTo(mouthCenterPoint - mouthHalfLength, mouthHeight);
  // ctx.quadraticCurveTo(
  //   mouthCenterPoint,
  //   mouthHeight,
  //   mouthCenterPoint + mouthHalfLength,
  //   mouthHeight
  // );
  // ctx.stroke();
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
  setInterval(changeWords, 6000);
});
