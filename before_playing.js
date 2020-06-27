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

function sort_changes(arr){
  let new_arr = [];
  for(let i=0;i<4;i++){
    for(let j=0;j<arr.length;j++){
      if(arr[j][0]==i){
        if(arr[j][1]==1)
          new_arr.push(arr[j]);
      }
    }
    for(let j=0;j<arr.length;j++){
      if(arr[j][0]==i){
        if(arr[j][1]==-1)
          new_arr.push(arr[j]);
      }
    }
  }
  return new_arr;
}