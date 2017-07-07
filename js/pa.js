$(document).ready(function(){
	var pageHeading = $('body h2').html();

	var deletion = '<div id="deleteAlert" class="modal fade" role="dialog">\
					  <div class="modal-dialog">\
					    <div class="modal-content">\
					      <div class="modal-header">\
					        <!--<button type="button" class="close" data-dismiss="modal">&times;</button>-->\
					        <h4 class="modal-title">Delete this "'+ pageHeading + '"</h4>\
					      </div>\
					      <div class="modal-body">\
					        <p>Some text in the modal.</p>\
					      </div>\
					      <div class="modal-footer">\
					        <button type="button" class="btn secondary" data-dismiss="modal">Cancel</button>\
					        <button type="button" class="btn primary" data-dismiss="modal">Yes</button>\
					      </div>\
					    </div>\
					  </div>\
					</div><style>.modal-title span{display: none;}';
	// modal html content for deletion starts here 
	$('body').append(deletion);
	$('.close-btn').attr("data-toggle", "modal").attr('data-target', '#deleteAlert');
	var deleteRow = "";
	$('.close-btn').click(function(){
		console.log($(this));
		//deleteRow = $(this).parents('tr');
		// if($(this).parents().hasClass('developmental-needs-actions')){
		// 	deleteRow = $(this).parents('.developmental-needs-actions');
		// }
		// else if ($(this).parents().hasClass('activities-content')){
		// 	deleteRow = $(this).parents('.activities-content');	
		// }
		// else if($(this).parents('tr')){
		// 	deleteRow = $(this).parents('tr');		
		// }
		if($(this).parents().hasClass('data-row')){
			deleteRow = $(this).parents('.data-row');
		}
	});	



	$('#deleteAlert .modal-footer button').on('click', function(e){
		//console.log($(this));
		if ($(this).hasClass('primary')) {
			console.log('primary clicked');
			//deleteRow = true;
			deleteRow.remove();
			deleteRow = "";
			//console.log(deleteRow);
		}
	});
	//console.log(deleteRow);
	
})