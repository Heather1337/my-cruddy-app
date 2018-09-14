$(document).ready(function() {

  ///////*For Adding Each inputKey & inputValue to Display*/////////
  for (var key in localStorage) {
    if (key !== "length" && key !== "setItem" && key !== "key"  && key !== "removeItem" && key !== "clear" && key !== "getItem") {
      let itemList = '<div class="display-item" data-storage-key="'+key+'"> ' + key + ' : ' + '<span class="description">' + localStorage.getItem(key) +'</span></div>';
      $(itemList).appendTo(".display");
    }
  }

  //////////*For Adding Category and Item Button*//////////
  $(".add-text-btn").on("click", function() {

  	// store values
  	let inputKey = $(".user-input-title").val();
  	let inputValue = $(".user-input-body").val();

  	//clear values from input boxes after adding them
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

  ////* Hide a list item on double click *///////////
    $(".display").on("dblclick", '*', function() {
      $(this).hide("fast");
    });


  ////* Highlight a list item on double click *//////
    // $(".display").on("dblclick", '*', function() {
    //   $(this).hide("slow");
    // });


  
// When the user clicks on <div>, open the popup //
  $(".popup").on("click", function() {
    console.log('working')
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  });
   


  /////////*For Deleting Category and Item Button*//////////

  $(".del-text-btn").on("click", function() {
  	localStorage.removeItem($('.user-input-title').val());
  	alert('item deleted? check console'); 
  	$(".user-input-title").val("");
    $(".user-input-body").val("");
  });

  //////////*For Deleting All Items at Once*//////////

  $(".del-all-btn").on("click", function() {
    localStorage.clear() ;
    $("#display").html("");
  });


});