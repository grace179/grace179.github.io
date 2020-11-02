const background = document.querySelector('.background');
const message = document.querySelector('.message');
let count = 0;

background.addEventListener('click',(e)=>{
    const target = e.target;


    if(target.matches('.garbage')){

        console.log('Good!');
        target.remove();
        count++;

        gameMessage('Good!');
        console.log(count);
        
        if(count === 3 ){
            gameMessage('Success!');
        }
    }
    
});

function gameMessage(text){
    message.innerText = text;
}