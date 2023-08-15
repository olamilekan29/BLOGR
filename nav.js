// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".navMenu");


// hamburger.addEventListener("click",() =>{
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })




    $(document).ready(function(){
        $('#icon').click(function(){
            $('ul').toggleClass('show');
        });
    });
    