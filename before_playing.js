// Phần xóa nút F12
// document.onkeypress = function (event) {
//   event = (event || window.event);
//   if (event.keyCode == 123) 
//     return false;
// }

// document.onmousedown = function (event) {
//   event = (event || window.event);
//   if (event.keyCode == 123) 
//     return false;
// }

// document.onkeydown = function (event) {
//   event = (event || window.event);
//   if (event.keyCode == 123)
//     return false;
// }

// Hàm tính khoảng cách từ điểm (x1, y1) đến (x2, y2)
function len(x1, y1, x2, y2){
  return Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
}