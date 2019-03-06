var servicesItems = document.getElementsByClassName("services__item");
var servicesItem;

for ( var j = 0; j < servicesItems.length; j++) {
  servicesItem = servicesItems[j];

  var infoCards = servicesItem.getElementsByClassName("item__info");
  var infoCard = infoCards[0];

  var openCardLinks = servicesItem.getElementsByClassName("item__openlink");
  var openCardLink;

  for ( var i = 0; i < openCardLinks.length; i++) {
    openCardLink = openCardLinks[i];
    openCardLink.addEventListener('click',  function () {
      infoCard.classList.remove("invisible");
    });
  }

  var closeCardLinks = servicesItem.getElementsByClassName("item__close-button");
  var closeCardLink;

  for ( var n = 0; n < closeCardLinks.length; n++) {
    closeCardLink = closeCardLinks[n];
    closeCardLink.addEventListener('click',  function () {
      infoCard.classList.add("invisible");
    });
  }



  // function toggleInfoCard() {
  //   infoCard.style.display = (infoCard.style.display == 'none') ? 'block' : 'none';
  // }

//   if (infoCard.classList.contains("invisible")) {
//     infoCardclassList.remove("invisible");
//   }
//   else {
//     infoCard.classList.add("invisible");
//   }
// });
}




