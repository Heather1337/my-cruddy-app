$(document).ready(function() {

  $(".add-text-btn").on("click", function() {

  	// store values
  	let inputKey = $(".user-input-title").val();
  	let inputValue = $(".user-input-body").val();

  	//clear values
  	$(".user-input-title").val("");
    $(".user-input-body").val("");

  	console.log(inputKey, inputValue);

    localStorage.setItem(inputKey, inputValue);

    /*alert( "value from local storage" + localStorage.getItem("testStorage") );*/
    let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + inputKey + ' ' + localStorage.getItem(inputKey) + '</div>';
    $(".display").html(itemHtml);
    //console.log(localStorage);
    //how can we delegate this event to the outer html node?
    //https://learn.jquery.com/events/event-delegation
    $(".display-item").on("click", function(e) {
      // plop the key:value back into the input boxes

  	  // get the values from the divs?
  	  console.log("key=> ", e.target.dataset.storageKey); // user-input-field
  	  localStorage.getItem(e.target.dataset.storageKey); //user-input-body

  	    // set those values in the form fields 
  	    $("user-input-title").val(e.target.dataset.storageKey);
  	    $("user-input-body").val(localStorage.getItem(e.target.dataset.storageKey));
    });

  });

  

  /*Allowing for previewing text live*/
  // TODO add back in later
  // $(".user-input").on("keyup", function() {
  // 	let inputValue = $(".user-input").val();
  //   localStorage.setItem("testStorage", inputValue);
  //   $(".display").text(localStorage.getItem("testStorage"));
  // });

  $(".del-text-btn").on("click", function() {
  	localStorage.removeItem($('.user-input-title').val() );
  	alert('item deleted? check console'); //maybe change to a window.confirm
  	$(".user-input-title").val("");
    $(".user-input-body").val("");
    // clearing display? what if I have multiple items?
    // after item is removed from local storage redisplay items from the old storage
  });

  /* Iterative approach to adding items 
     Store data as stringified array of objects 
     Store data with individual keys
     How do we get keys? reasearch Object.keys */


});