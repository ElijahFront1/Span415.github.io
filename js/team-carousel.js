document.getElementById('name2').style.display = "block"
function currentmember(ev, member) {

    let carouselItem = document.getElementsByClassName('carouselitem');
    for(let i = 0; i < carouselItem.length; i++) {
        carouselItem[i].style.display ='none';
    };

    let carouselButton = document.getElementsByClassName('carousel-button');
    for(let i = 0; i < carouselButton.length; i++) {
        carouselButton[i].className = carouselButton[i].className.replace(" active-member", "");
    }

    document.getElementById(member).style.display = "block";
    ev.currentTarget.className += " active-member"; 
}
