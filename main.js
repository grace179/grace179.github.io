'use strict';

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

const navbarMenu = document.querySelector(".navbar__menu");
const skills = document.querySelector("#skills");

document.addEventListener('scroll',()=>{
    if(scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});

navbarMenu.addEventListener('click',(event)=>{
    const tatget = event.target;
    const link = tatget.dataset.link;

    if(link == null){
        return;
    }
    navbarMenu.classList.remove('visible');

    console.log(event.target.dataset.link);
    scrollIntoView(link);

});

const navBarToggleBtn = document.querySelector(".navbar__toggle-btn");
navBarToggleBtn.addEventListener('click',()=>{
    navbarMenu.classList.toggle('visible');
})

const homeContact = document.querySelector(".home__btn");

homeContact.addEventListener('click',()=>{
    scrollIntoView("#contact")
})

const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    home.style.opacity = 1 - (window.scrollY/homeHeight);

    if(window.scrollY > homeHeight/2){
        upBtn.classList.add('visible');
    }else{
        upBtn.classList.remove('visible');
        
    }
})

const workCategories = document.querySelector(".work__categories");
const projects = document.querySelectorAll(".project");
let currentItem = null;

function activate(elem){
    elem.classList.add('selected');
    currentItem = elem;
}

function inactiavte(elem){
    elem.classList.remove('selected');
}
activate(document.querySelector('.category__btn:first-child'));

workCategories.addEventListener('click', (e)=>{
    const target = e.target;
    const filter = target.dataset.filter || target.parentNode.dataset.filter;

    console.log(filter);

    if(currentItem){
        inactiavte(currentItem);
    }

    activate(target);

    projects.forEach(project => {

        const type = project.dataset.type;
        if(filter==="*" || filter === type){
            project.classList.remove('invisible');
            project.classList.add('animation');

            setTimeout(()=>{
                project.classList.remove('animation');
        
            },300);

            
        }else{
            project.classList.add('invisible');
        }
        // console.log(project.dataset.type);
    });
})


const upBtn = document.querySelector(".up-btn");
upBtn.addEventListener('click',()=>{
    scroll({top:0, behavior:"smooth"});
})


function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"});
}