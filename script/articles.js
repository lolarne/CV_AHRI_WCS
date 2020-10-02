window.addEventListener('load',()=>{
let progressBars = document.querySelectorAll('.progress-bar');
let values =[
 '60%',
 '90%',
 '95%',
 '100%',
]; 

progressBars.forEach((progress,index)=>{
progress.style.width = values[index];
});
});