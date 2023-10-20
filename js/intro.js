let box_1=document.querySelector('#main .box1');
let box_2=document.querySelector('#main .box2');
let body=document.querySelector('body');

box_2.addEventListener("mousedown", ()=>{
    let maxX =window.innerWidth - box_2.clientWidth;
    let maxY = window.innerHeight - box_2.clientHeight;
  
  // Tạo ngẫu nhiên vị trí mới cho ô vuông trong vùng chọn
    let newX = Math.floor(Math.random() * maxX)-box_2.clientWidth-window.innerWidth*.2;
    let newY = Math.floor(Math.random() * maxY)-window.innerHeight*.3;

  // Di chuyển ô vuông đến vị trí mới
    box_2.style.transform = `translate(${newX}px, ${newY}px)`;})
  // Kết thúc di chuyển khi hover ra khỏi ô vuông
    box_2.addEventListener("mouseup", function() {
    // Đặt lại vị trí của ô vuông
    box_2.style.transform = "translate(0, 0)";
  })

let response=document.querySelector('.response');
box_1.onclick=()=>{
    response.style.display="block";
}
let next_btn=document.querySelector('button.next');
next_btn.onclick=()=>{
    window.open('./main.html')
}
