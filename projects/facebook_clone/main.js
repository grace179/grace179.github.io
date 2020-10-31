const bellBtn = document.querySelector('.bell');
const notice =  document.querySelector('.notice');

const contents = document.querySelector('#contents');

bellBtn.addEventListener('click',()=>{
    notice.classList.toggle('visible');
});

contents.addEventListener('click',(e)=>{

    let target = e.target;

    while(!target.getAttribute('data-name')){
        target = target.parentNode;

        if(target.nodeName === 'BODY'){
            target = null;
            return;
        }
    }

    // console.log(target);

    if(target.matches('[data-name="like"]')){
        console.log('like-btn');
        
    }else if(target.matches('[data-name="more"]')){
        console.log('more-btn');
        target.classList.toggle('active');
    }
});