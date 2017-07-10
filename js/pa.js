$(document).ready(function(){
// modal for deletion alert starts here
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
	$('body').append(deletion);
	$('.close-btn').attr("data-toggle", "modal").attr('data-target', '#deleteAlert');
	var deleteRow = "";
	$('.close-btn').click(function(){
		if($(this).parents().hasClass('data-row')){
			deleteRow = $(this).parents('.data-row');
		}
	});
	$('#deleteAlert .modal-footer button').on('click', function(e){
		if ($(this).hasClass('primary')) {
			deleteRow.remove();
			deleteRow = "";
		}
	});
	$('.add-item').click(function(){
		 var totalDiv = ($(this).parent('.title').siblings('.data-row').length) - 1;
		 var totalTr = ($(this).parents('thead').next('tbody').children('.data-row').length) - 1;

		console.log($(this).parent('.title').siblings('.data-row')[totalDiv]);
		console.log($(this).parents('thead').next('tbody').children('.data-row')[totalTr]);
		// if($(this).parents().next().children('.data-row')){
		// 		console.log('I am in tr');
		// 		console.log($(this).parents().next().children('.data-row'));
		// 	}
		// else if ($(this).parent().next('.data-row')){
		// 	console.log('I am in div');
		// 	console.log($(this).next().children('.data-row'));
		// }
	})
	// add row functionality ends here
})