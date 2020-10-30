const bellBtn = document.querySelector('.bell');
const notice =  document.querySelector('.notice');

bellBtn.addEventListener('click',()=>{
    notice.classList.toggle('visible');
});