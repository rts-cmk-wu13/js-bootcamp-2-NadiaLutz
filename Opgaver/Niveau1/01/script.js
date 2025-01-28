let colors = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333"];
let i = 0;
let colorBtn = document.getElementById('myButton');

// function randomColor() { 
//     return colors[Math.floor(Math.random() * colors.length)];
// }

colorBtn.addEventListener('click', function() {
    i = i < colors.length - 1 ? ++i : 0;
  document.getElementById('myButton').style.background = colors[i]
  })

   