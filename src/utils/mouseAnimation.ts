// export default function mouseAnimate() {
//   let balls: any = [];
//   let longPressed = false;
//   let longPress: any;
//   let multiplier = 0;
//   let width: any, height: any;
//   let origin: any;
//   let normal: any;
//   let ctx: any;
//   const colours = ["#F73859", "#14FFEC", "#00E0FF", "#FF99FE", "#FAF15D"];
//   const canvas = document.createElement("canvas");
//   document.body.appendChild(canvas);
//   canvas.setAttribute("style", "width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;");
//   const pointer = document.createElement("span");
//   pointer.classList.add("pointer");
//   document.body.appendChild(pointer);

//   if (canvas.getContext && window.addEventListener) {
//     ctx = canvas.getContext("2d");
//     updateSize();
//     window.addEventListener('resize', updateSize, false);
//     loop();

//     /**
//      * 鼠标按下
//      */
//     window.addEventListener("mousedown", function (e) {
//       pushBalls(randBetween(5, 12), e.clientX, e.clientY);  // 控制小球的随机数量
//       document.body.classList.add("is-pressed");
//       longPress = setTimeout(function () {
//         document.body.classList.add("is-longpress");
//         longPressed = true;
//       }, 500);
//     }, false);

//     /**
//      * 鼠标抬起
//      */
//     window.addEventListener("mouseup", function (e) {
//       clearInterval(longPress);
//       if (longPressed == true) {
//         document.body.classList.remove("is-longpress");
//         pushBalls(randBetween(50 + Math.ceil(multiplier), 100 + Math.ceil(multiplier)), e.clientX, e.clientY);
//         longPressed = false;
//       }
//       document.body.classList.remove("is-pressed");
//     }, false);

//     /**
//      * 鼠标离开
//      */
//     window.addEventListener("mousemove", function (e) {
//       let x = e.clientX;
//       let y = e.clientY;
//       pointer.style.top = y + "px";
//       pointer.style.left = x + "px";
//     }, false);
//   } else {
//     console.log("canvas or addEventListener is unsupported!");
//   }

//   function updateSize() {
//     canvas.width = window.innerWidth * 2;
//     canvas.height = window.innerHeight * 2;
//     canvas.style.width = window.innerWidth + 'px';
//     canvas.style.height = window.innerHeight + 'px';
//     ctx.scale(2, 2);
//     width = (canvas.width = window.innerWidth);
//     height = (canvas.height = window.innerHeight);
//     origin = {
//       x: width / 2,
//       y: height / 2
//     };
//     normal = {
//       x: width / 2,
//       y: height / 2
//     };
//   }

//   class Ball {
//     public x: number;
//     public y: number;
//     public angle: number;
//     public multiplier: number;
//     public vx: number;
//     public vy: number;
//     public r: number;
//     public color: string;

//     constructor(x: number = origin.x, y: number = origin.y) {
//       this.x = x;
//       this.y = y;
//       this.angle = Math.PI * 2 * Math.random();
//       if (longPressed == true) {
//         this.multiplier = randBetween(14 + multiplier, 15 + multiplier);
//       } else {
//         this.multiplier = randBetween(6, 12);
//       }
//       this.vx = (this.multiplier + Math.random() * 0.5) * Math.cos(this.angle);
//       this.vy = (this.multiplier + Math.random() * 0.5) * Math.sin(this.angle);
//       this.r = randBetween(8, 12) + 3 * Math.random();
//       this.color = colours[Math.floor(Math.random() * colours.length)];
//     }

//     public update(): void {
//       this.x += this.vx - normal.x;
//       this.y += this.vy - normal.y;
//       normal.x = -2 / window.innerWidth * Math.sin(this.angle);
//       normal.y = -2 / window.innerHeight * Math.cos(this.angle);
//       this.r -= 0.3;
//       this.vx *= 0.9;  // 控制爆炸半径的
//       this.vy *= 0.9;
//     }
//   }

//   function pushBalls(count = 1, x = origin.x, y = origin.y) {
//     for (let i = 0; i < count; i++) {
//       balls.push(new Ball(x, y));
//     }
//   }

//   function randBetween(min: any, max: any) {
//     return Math.floor(Math.random() * max) + min;
//   }

//   function loop() {
//     ctx.fillStyle = "rgba(255, 255, 255, 0)";
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for (let i = 0; i < balls.length; i++) {
//       let b = balls[i];
//       if (b.r < 0) continue;
//       ctx.fillStyle = b.color;
//       ctx.beginPath();
//       ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
//       ctx.fill();
//       b.update();
//     }
//     if (longPressed == true) {
//       multiplier += 0.2;
//     } else if (!longPressed && multiplier >= 0) {
//       multiplier -= 0.4;
//     }
//     removeBall();
//     requestAnimationFrame(loop);
//   }

//   function removeBall() {
//     for (let i = 0; i < balls.length; i++) {
//       let b = balls[i];
//       if (b.x + b.r < 0 || b.x - b.r > width || b.y + b.r < 0 || b.y - b.r > height || b.r < 0) {
//         balls.splice(i, 1);
//       }
//     }
//   }
// }

export default function mouseAnimate() {
  var a_idx = 0;
  window.onclick = function (event) {
    var a: any = new Array(
      "富强",
      "民主",
      "文明",
      "和谐",
      "自由",
      "平等",
      "公正",
      "法治",
      "爱国",
      "敬业",
      "诚信",
      "友善",
    );

    var heart: any = document.createElement("b"); //创建b元素
    heart.onselectstart = new Function("event.returnValue=false"); //防止拖动

    document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
    a_idx = (a_idx + 1) % a.length;
    heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式

    var f = 16, // 字体大小
      x = event.clientX - f / 2, // 横坐标
      y = event.clientY - f, // 纵坐标
      c = randomColor(), // 随机颜色
      a: any = 1, // 透明度
      s = 1.2; // 放大缩小

    var timer = setInterval(function () {
      //添加定时器
      if (a <= 0) {
        document.body.removeChild(heart);
        clearInterval(timer);
      } else {
        heart.style.cssText =
          "font-size:16px;cursor: default;position: fixed;color:" +
          c +
          ";left:" +
          x +
          "px;top:" +
          y +
          "px;opacity:" +
          a +
          ";transform:scale(" +
          s +
          ");";

        y--;
        a -= 0.016;
        s += 0.002;
      }
    }, 15);
  };
  // 随机颜色
  function randomColor() {
    return (
      "rgb(" +
      ~~(Math.random() * 255) +
      "," +
      ~~(Math.random() * 255) +
      "," +
      ~~(Math.random() * 255) +
      ")"
    );
  }
}
