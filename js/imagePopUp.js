
$( document ).ready(function() {



// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');




// Get the modal
var modal = document.getElementById('myModal');


// original code
// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
$(".myImg").click(function(){


var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

modal.style.display = "block";
modalImg.src = this.src;
    captionText.innerHTML = this.alt;

});



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
//when pressing outside the image...the modal will close
$(".modal").click(function(evt){
  
  if(evt.target.id == "img01")
  {
    return;
  }
   else{
  modal.style.display = "none";
   }




})
//esc button was clicked
$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        // <DO YOUR WORK HERE>
        modal.style.display = "none";
}})



});