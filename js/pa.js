$(document).ready(function(){
	$('.close-btn').click(function(){
		console.log('dsfsd');
		$(this).parents('tr').hide();
	});
	$('.close-btn').click(function() {
	    bootbox.confirm("Are you sure want to delete?", function(result) {
	      alert("Confirm result: " + result);
	    });
	  });
})