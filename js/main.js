let tmp=document.querySelectorAll(".row")

for(let i of tmp){
    let a=Array.from(i.querySelectorAll(".img img"));
    a.forEach((e, i)=>{
        e.style.display="none";
    })
    
    let index=0;
    a[index].style.display="block"
    i.onclick=()=>{
        a[index].style.display="none"
        if(index+1>=a.length){
            index=0;
        }else index++
        a[index].style.display="block"
    }
}