const bodyele=document.querySelector('body')
bodyele.addEventListener('mousemove',(e)=>{
 const xcor=e.offsetX;
const ycor=e.offsetY;
//console.log(xcor,ycor)
const spanele=document.createElement('span')

spanele.style.left=`${xcor}px`
spanele.style.top=`${ycor}px`

const size=Math.random()*100
spanele.style.width=`${size}px`
spanele.style.height=`${size}px`

bodyele.appendChild(spanele)
setTimeout(()=>{
    spanele.remove()
},2000)


})