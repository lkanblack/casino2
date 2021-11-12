let gameBlocks = document.querySelectorAll('.game-block');
let showDetails = document.querySelectorAll('.show-details_mobile');


for(detail of showDetails){
    detail.addEventListener('click',function(){
        this.nextElementSibling.classList.toggle('block');
        this.parentElement.nextElementSibling.classList.toggle('block');
        this.classList.toggle('down')
    });
}