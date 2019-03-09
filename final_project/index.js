//modal form

var modal = document.getElementById("modal");
var modalOpenButton = document.getElementById("modal_open_button");
var modalCloseButton = document.getElementById("modal_close_button");

modalOpenButton.addEventListener('click', function () {
  modal.style.display = 'flex';
});

modalCloseButton.addEventListener('click', function () {
  modal.style.display = 'none';
});


//service items
var servicesItems = document.getElementsByClassName("services__item");
var servicesItem;


for ( var j = 0; j < servicesItems.length; j++) {
  servicesItem = servicesItems[j];

  (function (item) {
    var infoCards = item.getElementsByClassName("item__info");
    var infoCard;
  
    var openCardLinks = item.getElementsByClassName("item__openlink");
    var openCardLink;
  
    var closeCardLinks = item.getElementsByClassName("item__close-button");
    var closeCardLink;   
    
    for (var m = 0; m < infoCards.length; m++) {
      infoCard = infoCards[m];

      for ( var i = 0; i < openCardLinks.length; i++) {
        openCardLink = openCardLinks[i];
        openCardLink.addEventListener('click', showInfoCard);
      }

      for ( var n = 0; n < closeCardLinks.length; n++) {
        closeCardLink = closeCardLinks[n];
        closeCardLink.addEventListener('click', hideInfoCard);
      }
    }

    function hideInfoCard () {
      infoCard.classList.add("invisible");
    }

    function showInfoCard () {
      infoCard.classList.remove("invisible");
    } 

  })(servicesItem);

}
