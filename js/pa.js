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
					      <div class="modal-footer pa-cta-cnt">\
					        <button type="button" class="btn secondary" data-dismiss="modal">Cancel</button>\
					        <button type="button" class="btn primary" data-dismiss="modal">Yes</button>\
					      </div>\
					    </div>\
					  </div>\
					</div>';
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
// modal for deletion alert ends here
// modal for error on page starts here 
	var errorMessage = '<div id="errorMessage" class="modal fade" role="dialog">\
					  <div class="modal-dialog">\
					    <div class="modal-content">\
					      <div class="modal-header">\
					        <!--<button type="button" class="close" data-dismiss="modal">&times;</button>-->\
					        <h4 class="modal-title">Error</h4>\
					      </div>\
					      <div class="modal-body">\
					        <ul>\
					        	<li>error message 1</li>\
					        	<li>error message 2</li>\
					        	<li>error message 3</li>\
					        </ul>\
					      </div>\
					      <div class="modal-footer pa-cta-cnt">\
					        <button type="button" class="btn secondary" data-dismiss="modal">OK</button>\
					      </div>\
					    </div>\
					  </div>\
					</div>';
	var errorLink = '<a href="#nogo" data-toggle="modal" data-target="#errorMessage" class="errorLink">error</a>';
	var loader = "<div id='loader_container' class='modal fade' role='dialog'><div id='loader'></div></div>"
	$('body').append(errorMessage);
	$('body').append(errorLink);
	$('body').append(loader);
// modal for error on page ends here 
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
 $('.save').click( function(){
  $(this).addClass('btn-activated').delay(1000).queue(function(next ){
     $(this).removeClass('btn-activated');
     next();
  })
});
// Overall functionality ends from here 
function callDatePicker(){
	if($('.datetimepicker1').length > 0){
		// $('.datetimepicker1').attr('disabled',true);
		$('.datetimepicker1').on('click', function(){
			// if ($(this).val() == '') {
				$(this).val('');
			// };
		})
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

	    if($('#datetimepicker8').length > 0){
	     $('#datetimepicker8').datetimepicker({
	     	format: 'MM/YYYY'
	     });
	     $('#datetimepicker9').datetimepicker({
	         useCurrent: false, //Important! See issue #1075
	         format: 'MM/YYYY'
	     });
	     $("#datetimepicker8").on("dp.change", function (e) {
	         $('#datetimepicker9').data("DateTimePicker").minDate(e.date);
	     });
	     $("#datetimepicker8").on("dp.change", function (e) {
	         $('#datetimepicker9').data("DateTimePicker").maxDate(e.date);
	     });
	    }
}
	callDatePicker();
	// $('input, textarea').wrap('<span class="formField"></span>');
});