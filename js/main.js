$( document ).ready(function() {
	//Remove parent on click of trash can
	$("#items").on("click", ".fa-trash-o", function(){
		$(this).parent().remove();
	});

	//Gray out and strike through the text box when checkbox is clicked
	//Also swap the empty checkbox for a checked box
	$("#items").on("click", ".fa-square-o", function(){
		$(this).removeClass("fa-square-o");
		$(this).addClass("fa-check-square-o");
		$(this).next().addClass("crossedOff");				
	});	

	//Undo the above
	$("#items").on("click", ".fa-check-square-o", function(){
		$(this).addClass("fa-square-o");
		$(this).removeClass("fa-check-square-o");
		$(this).next().removeClass("crossedOff");
	});

	//Code the Remove Checked function
	$("#removeChecked").click(function(){
		$(".item").not(".template").has(".fa-check-square-o").remove();
	})

	//Code the Remove All function
	$("#removeAll").click(function(){
		$(".item").not(".template").not("newItemDiv").remove();
	})	

	$(".newItem").focus(function(){
		$("#items").append($(".template").clone(true));	
		$(this).parent().removeClass("template")	
		$(this).val("");
		$(this).removeClass("newItem");
		$(this).parent().append('<i class="fa fa-trash-o fa-1g"></i>');
		$(this).unbind();
	});
});