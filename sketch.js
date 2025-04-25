let points = [
  [-3, 5], [3, 7], [1, 5], [2, 4], [4, 3], [5, 2], [6, 2], [8, 4], [8, -1], 
  [6, 0], [0, -3], [2, -6], [-2, -3], [-4, -2], [-5, -1], [-6, 1], [-6, 2]
];

let shapes = [];

function setup() { //設定
  //一個充滿視窗的桌布
  createCanvas(windowWidth, windowHeight);

  // 初始化10個形狀
  for (let i = 0; i < 10; i++) {
    shapes.push({
      x: random(width),
      y: random(height),
      dx: random(-8, 8), // 增加速度
      dy: random(-8, 8)  // 增加速度
    });
  }
}

function draw() { //畫圓圓
  background("#cceeff"); //背景顏色為灰色
  stroke("#1d2d44"); //框線顏色為黃色
  strokeWeight(5); //框線粗細為5
  fill("#00008b"); //填充顏色為深藍色

  // 更新和繪製每個形狀
  for (let shape of shapes) {
    // 更新位置
    shape.x += shape.dx;
    shape.y += shape.dy;

    // 邊界檢查
    if (shape.x < 0 || shape.x > width) shape.dx *= -1;
    if (shape.y < 0 || shape.y > height) shape.dy *= -1;

    // 繪製形狀
    beginShape();
    for (let i = 0; i < points.length; i++) {
      let x = map(points[i][0], -10, 10, 0, width / 8) + shape.x; // 縮小4倍
      let y = map(points[i][1], -10, 10, height / 8, 0) + shape.y; // 縮小4倍
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}
