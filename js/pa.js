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
	});
	

	// Overall functionality starts from here 
	$('.over-all-ratings > li').click( function() {
	$(this).toggleClass('active-selection');
	var index = 0;
	var prevIndex;
	var prevIndex = $(this).index();
	var adjNext = $(this).next();
	var adjPrev = $(this).prev();
	var prevElem = $(this).prev().prev();
	var nextElem = $(this).next().next();
	
	if(adjNext.hasClass('active-selection') || adjPrev.hasClass('active-selection')){
		if ($(this).next().hasClass('active-selection')) {
			if (prevIndex == 0) {
				nextElem.removeClass('active-selection');
				nextElem.next().removeClass('active-selection');
			}
			else if (prevIndex == 1) {
				nextElem.removeClass('active-selection');
			}
		}
		else if (adjPrev.hasClass('active-selection')) {
			if (prevIndex == 2) {
				prevElem.removeClass('active-selection');
				prevElem.prev().removeClass('active-selection');
			}
			else if (prevIndex == 3) {
				prevElem.removeClass('active-selection');
			}
		}
	}
	else{
			$(this).siblings().removeClass('active-selection');
		}
	});
// Overall functionality ends from here 
})