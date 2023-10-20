// Tạo các bong bóng ngẫu nhiên
let img_em=["./assets/imgs/z4672079089389_700fcb24aefd31478048a19a1d4c6b9e.jpg",
            "./assets/imgs/z4485727663188_6b0faecad2607fb971a87c9d5a4c86ac.jpg",
            "./assets/imgs/z4485727687763_9228efd449cffffae0d776d7a31a491d.jpg",
            "./assets/imgs/z4672079072219_1bfd9a4c80922a9fdd9a5499d7f4dfb1.jpg",
            "./assets/imgs/z4672079089389_700fcb24aefd31478048a19a1d4c6b9e.jpg",
            "./assets/imgs/z4672079122653_5138709e850e36866a90ff46955b5339.jpg",
            "./assets/imgs/z4672082635980_b444ef805af9bc360b4536b72b06b51d.jpg",
            "./assets/imgs/z4401733345517_c0149f1a16ce77f276040721c388a155.jpg",
            "./assets/imgs/z4245476235175_b0f293ccac6d86ebf0659a29dcca25d5.jpg",
            "./assets/imgs/z4245486676452_040af0a9c6c078ebfde99244ca54d3db.jpg",
            "./assets/imgs/z4401732017742_bcad7b1401950f955cf0d2cc928cb199.jpg",
            "./assets/imgs/z4245453481036_43e29e5d35f92ce4b35ca1887db00a34.jpg",
            "./assets/imgs/z4245461696430_c0eda9f5d9f44b6e0ebfc7cc5cd5ba9c.jpg",
            "./assets/imgs/z4357048372475_63cfa8fa58b7940f1e7008aa185cfb93.jpg"
]
function createBubbles() {
    for(let imgem of img_em){
        let bubble = document.createElement("div");
        bubble.className = "bubble";
        bubble.style.left = Math.random() * 100 + "%";
        bubble.style.animationDuration = (Math.random() * 5 + 3) + "s"; // Độ trễ và thời gian động của bong bóng
        let img = document.createElement("img");
        img.src = imgem; // Thay thế bằng đường dẫn đến hình ảnh của bạn    
        bubble.appendChild(img);
        document.querySelector(".bubble-container").appendChild(bubble);
    }
}
// bat su kien dang nhap

let pass=document.getElementById('password');
let dn=document.querySelector('.login-container form button');

dn.onclick=()=>{
    if(pass.value=="23246"){
        alert("Đăng nhập thành công!!!");
        window.open('./intro.html');
    }else{
        alert("Sai rồi nhé em thử lại đi nào");
    }
}


// overlay

let overlay1=document.querySelector('.overlay');
let hint_button=document.querySelector('.hint .btn_hint');
hint_button.onclick=()=>{
    overlay1.classList.add('active');
    overlay1.style.display="block";
   
}
let exit_btn=document.querySelector('.overlay .exit');

exit_btn.onclick=()=>{
    overlay1.classList.remove('active');
    overlay1.style.display="none";

}


createBubbles();
