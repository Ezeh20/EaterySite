const icons=document.querySelectorAll('.section-1-icons i')
const menu=document.querySelector('.menu')
const press=document.querySelectorAll('.target')

let i=1


setInterval(()=>{
   i++
   const icon=document.querySelector('.section-1-icons i.change')
   icon.classList.remove('change')
   if(i>icons.length){
      icons[0].classList.add('change')
      i=1
   }else{
      icon.nextElementSibling.classList.add('change')
   }
},1000)


menu.addEventListener('click', ()=>{
     press.forEach((target)=>{
    target.classList.toggle('target')
   })
})