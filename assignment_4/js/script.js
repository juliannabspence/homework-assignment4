$(document).ready(function(){


// Hide "read less" from page load
$(".read-less").hide();

// Hide paragraphs of text to release, per Barry
$("p#first-read-more-text").hide();
$("p#second-read-more-text").hide();

// If you click read more, slide down text with a "read less" link
//read less appears - #first-read-less-button

// Click "read more" - #first-read-more-button
$("#first-read-more-button").click(slideDownText);
$("#first-read-less-button").click(slideUpText);
$("#second-read-more-button").click(slideDownText2);
$("#second-read-less-button").click(slideUpText2);

function slideDownText() {
	//expands texts and - #first-read-more-text
	 $("#first-read-more-text").slideDown();
		$("#first-read-more-button").hide();
	    $("#first-read-less-button").show();
	    event.preventDefault();

}	   

function slideUpText() {
	//hides texts and - #first-read-less-text
	$("#first-read-more-text").slideUp();
		$("#first-read-more-button").show();
		$("#first-read-less-button").hide();
		event.preventDefault();

} 	    

// up until here it functions alright - but it expands the second-read-more-text when I click "read more" on the first-paragraph
// second paragraph



function slideDownText2() {
	 $("#second-read-more-text").slideDown();
	    $("#second-read-more-button").hide();
	    $("#second-read-less-button").show();   
	    event.preventDefault();
}

function slideUpText2() {
	console.log("inside second text")
	$("#second-read-more-text").slideUp();
		$("#second-read-more-button").show();
	    $("#second-read-less-button").hide(); 
	    event.preventDefault();
}	    


// // If you click read more on second <p>, slide down text with a "read less" link

// $("#second-read-more-button").click(slideDownText);

// function slideDownText() {
// 	$("#second-read-more-text").slideDown();
// }

// // if you click read less on second <p>, slide up text with a "read more" link

// $("#second-read-less-button").click(slideUpText);

// function slideUpText() {
// 	$("#second-read-more-text").slideUp();
// 	$(".read-more").show();
// 	$(".read-less").hide();
// }


// // Hide "read more" & "read less" when necessary -- need help with .hide() & .show()

//  // $(".read-more").hide(); 
//  // $(".read-less").show();


});
