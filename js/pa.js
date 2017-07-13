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
	var deleteRow;
	$('body').on('click','.close-btn',function(){
		if($(this).parents().hasClass('data-row')){
			deleteRow = $(this).parents('.data-row');
		}
	});
	$('body').on('click','#deleteAlert .modal-footer button', function(e){
		if ($(this).hasClass('primary')) {
			deleteRow.remove();
		}
	});
	$('a.add-item').click(function(){
		   var data_row_container = $(this).parents('.data-row-container');
		   var totalDiv = ($(this).parent().next().children('.data-row').length - 1);
		   var totalTr = ($(this).parents('thead').next().children('.data-row').length - 1);
		   var targetElem;
		  //console.log($(this).parent());
		   if($(this).parent('div').hasClass('title')) {
		   	 targetElem = $(this).parent().next().children('.data-row')[totalDiv];
		   	 $(targetElem).clone().find('textarea, input:text').val('').end().appendTo(($(this).parent().next('.data-row-container')));
		   	 callDatePicker();
		   } 
		   else if($(this).parent('th')){
		  	 targetElem = $(this).parents('thead').next().children('.data-row')[totalTr];
		  	 $(targetElem).clone().find('textarea, input:text').val('').end().appendTo(($(this).parents('thead').next('.data-row-container')));
		  	 callDatePicker()
		  }

	});

	// Overall functionality starts from here 
	$('.over-all-ratings > li').click(function() {
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
			else if (prevIndex == 2) {
				nextElem.removeClass('active-selection');
			}
		}
		else if (adjPrev.hasClass('active-selection')) {
			if (prevIndex == 1) {
				prevElem.removeClass('active-selection');
				prevElem.prev().removeClass('active-selection');
			}
			else if (prevIndex == 2) {
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
		var totalSel = [];
	$('.over-all-ratings > li').each(function(i){
		if($(this).hasClass("active-selection")){
			totalSel.push(i);// these are the selected rating index for saving rating
		}
	});
	//console.log(totalSel);
});
// Overall functionality ends from here 
function callDatePicker(){
	if($('.datetimepicker1').length > 0){
    	$('.datetimepicker1').datetimepicker({
	    	format: 'DD/MM/YYYY'
	    });
    }
    if($('#datetimepicker6').length > 0){
	     $('#datetimepicker6').datetimepicker({
	     	format: 'DD/MM/YYYY'
	     });
	     $('#datetimepicker7').datetimepicker({
	         useCurrent: false, //Important! See issue #1075
	         format: 'DD/MM/YYYY'
	     });
	     $("#datetimepicker6").on("dp.change", function (e) {
	         $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
	     });
	     $("#datetimepicker7").on("dp.change", function (e) {
	         $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
	     });
	    }	
}
callDatePicker();
})