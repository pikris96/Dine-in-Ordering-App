document.addEventListener("DOMContentLoaded", function(){
 
    //Showing the header when scrolling down
     window.addEventListener('scroll', function() {
         if (window.scrollY > 150) {
           document.getElementById('navbar_top').classList.add('fixed-top');
           document.getElementById('navbar_top').classList.add('after-scroll-navbar');
           document.querySelector(".navbar-brand").style.color = 'white';
           document.querySelector(".nav-add-to-card").style.color = 'white';
           document.querySelector(".navbar-toggler").style.color = 'white';
          
           // add padding top to show content behind navbar
           navbar_height = document.querySelector('.navbar').offsetHeight;
           document.body.style.paddingTop = navbar_height + 'px';
   
         } else {
           document.getElementById('navbar_top').classList.remove('fixed-top');
           document.getElementById('navbar_top').classList.remove('after-scroll-navbar');
           document.querySelector(".navbar-brand").style.color = '#12ADB0';
           document.querySelector(".nav-add-to-card").style.color = '#12ADB0';
           document.querySelector(".navbar-toggler").style.color = '#12ADB0';
            // remove padding top from body
           document.body.style.paddingTop = '0';
         } 
     });
   
     //Showing the nav-bar when scrolling down
   
    window.addEventListener('scroll', function() {
         if (window.scrollY > 250) {
           document.getElementById('nav-menu-categories').classList.add('nav-bar-categories-after-scroll');
           // document.getElementById('navbar_top').classList.add('after-scroll-navbar');
          
           // add padding top to show content behind navbar
           // navbar_height = document.querySelector('#nav-menu-categories').offsetHeight;
           navbar_top = document.querySelector(".fixed-top").offsetHeight;
           document.body.style.paddingTop =  navbar_top +100 + 'px';
   
         } else {
           document.getElementById('nav-menu-categories').classList.remove('nav-bar-categories-after-scroll');
           // document.getElementById('navbar_top').classList.remove('after-scroll-navbar');
            // remove padding top from body
           document.body.style.paddingTop = '0';
         } 
     });
   });
   
   // Declaration of DOM elements
     let plus = document.querySelector("#plus-icon");
     let minus = document.querySelector("#minus-icon");
     let quantity = document.querySelector("#quantity");
     let itemPrice = document.querySelector(".item-price-for-cart");
     let items = document.querySelector('.menu-items');
     let add = document.querySelector(".add-to-cart");
     let goToCard = document.querySelector(".goToCard");
     let modal = document.querySelector(".modal");
     let totalItemInCard = 0;
     let card = [];
    
   
   //Declare default values
     quantity.innerText = 1;
     itemPrice.innerText =  parseFloat(2.30).toFixed(2);
     let itemFixedPrice = itemPrice.innerText;
   
     //Add to quantity by clicking plus button
     function plusButton(){
       let quantity = document.querySelector("#quantity");
       let itemPrice = document.querySelector(".item-price-for-cart");
       quantity.innerText = parseInt(quantity.innerText) + 1;
       itemPrice.innerText = parseFloat(parseInt(quantity.innerText) * itemFixedPrice).toFixed(2);
     }
   
      //Minus to quantity by clicking minus button
      function minusButton(){
       let quantity = document.querySelector("#quantity");
       let itemPrice = document.querySelector(".item-price-for-cart");
       quantity.innerText = parseInt(quantity.innerText) - 1;
       itemPrice.innerText = parseFloat(parseInt(quantity.innerText) * itemFixedPrice).toFixed(2)
     }
   
     //Make the quantity of an item 1 every time that item selected
     function makeQuantityOne(){
       let quantity = document.querySelector("#quantity");
       quantity.innerText = 1;
     }
   
     //Add To CART
     function addToCart(){
   
       let quantity = document.querySelector("#quantity");
       let itemName = document.querySelector("#exampleModalLongTitle");
       let totalPriceForItem = document.querySelector(".item-price-for-cart")
   
   
       //Add the items in card array
       const obj = {item: itemName.innerText,
                     quantity: quantity.innerText,
                   totalPrice:totalPriceForItem.innerText}
       card.push(obj);
     
         // Make the total item zero every time that add new items to make the correct addition
       totalItemInCard = 0;
       // calculate the quantity of items in card
         card.forEach(i => {
         totalItemInCard += parseInt(i.quantity);
        })
   
        goToCard.style.display="block";
        let totalItemsSpan = document.querySelector(".totalItems");
        let cardItems = document.querySelector(".nav-bar-card-items");
        totalItemsSpan.innerText = totalItemInCard;
        cardItems.innerText = totalItemInCard;
        cardItems.style.display = 'inline-block'
     
        //close modal window
        $('.modal').modal('hide');
        itemPrice.innerText = itemFixedPrice;
     }
   
     //Check if the card is Empty
     if (card.length <= 0){
       goToCard.style.display="none";
     }
   
     //EventListeners
     add.addEventListener("click",addToCart);
     items.addEventListener("click",makeQuantityOne);
     plus.addEventListener("click", plusButton);
     minus.addEventListener("click",minusButton);





     