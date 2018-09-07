$(document).ready(function() {

  $(".add-text-btn").on("click", function() {
  	let inputValue = $(".user-input").val();
    localStorage.setItem("testStorage", inputValue);
    /*alert( "value from local storage" + localStorage.getItem("testStorage") );*/
    
    $(".display").text(localStorage.getItem("testStorage"));
  });

  /*Allowing for previewing text live*/

  $(".user-input").on("keyup", function() {
  	let inputValue = $(".user-input").val();
    localStorage.setItem("testStorage", inputValue);
    $(".display").text(localStorage.getItem("testStorage"));
  });

  $(".delete-text.btn").on("click", function() {
  	localStorage.removeItem("testStorage");
  	alert('item deleted? check console');
  });

  /* Iterative approach to adding items 
     Store data as stringified array of objects 
     Store data with individual keys
     How do we get keys? reasearch Object.keys */


});