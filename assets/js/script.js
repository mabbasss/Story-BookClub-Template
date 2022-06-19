$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})

//change btn text and color
var btn = document.querySelectorAll(".joinBtns");
var modal=document.querySelector(".modal-body");
var joinAlert=document.querySelector(".joinAlert");
var leaveAlert=document.querySelector(".leaveAlert");
for(var i=0; i<btn.length;i++){
      btn[i].addEventListener('click', function handleClick(event) {
            if(event.target.innerText=="Join club"){
                  event.target.innerText="Leave club"
                  event.target.classList.remove('btn-outline-success');
                  event.target.classList.add('btn-outline-danger');
                  joinAlert.classList.remove("d-none");
                  leaveAlert.classList.add("d-none");
                  
            }else{
                  event.target.innerText="Join club"
                  event.target.classList.remove('btn-outline-danger');
                  event.target.classList.add('btn-outline-success');
                  leaveAlert.classList.remove("d-none");
                  joinAlert.classList.add("d-none");
            }
          });     
}

for(var i=0; i<btn.length;i++){
      btn[i].onclick=()=>{
           let cardImg = event.target.parentElement.parentElement.children[0].children[0].src;
           document.querySelector("#bookClubCardImg").src=cardImg;
           let string = arr[i]
      }
}



