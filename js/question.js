let td=document.querySelectorAll('.td');
let h3_item=document.querySelectorAll('h3');


td.forEach((i, index) => {
    i.onclick=()=>{
        h3_item[index].style.display="block"
    }
});