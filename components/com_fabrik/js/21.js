//  This must be stored in /components/com_fabrik/js
//  This is loaded only for form 21 (Account Event)
//
//  See http://fabrikar.com/wiki/index.php/Fabrik_3_form_javascript for details on events
//
//	Submit form click
//
//	
//	var i = this.id.match(/_(\d+)$/)[1];
//	$('join___41___account_event_detail___line_item_amount_'+i).value = parseFloat($('join___41___account_event_detail___number_paid_for_'+i).value)*parseFloat($('join___41___account_event_detail___per_item_amount_'+i).value);
//	
//	
//	var i = this.id.match(/_(\d+)$/)[1];
//	var eventType = $('join___41___account_event_detail___event_type_'+i).value;
//	ajaxGetEventCharge(eventType,'join___41___account_event_detail___line_item_amount_'+i);
//

function sumEventDetails(){
var lineAmounts = $('group44').getElements('input[name*=account_event_detail___line_item_amount]');
var totalAmount = 0.0;

	for (var i=0;i<lineAmounts.length;i++)
	{
		totalAmount = totalAmount + lineAmounts.indexOf(i);
	}
 
  form_21.formElements.get('account_event___amount_charged').update(totalAmount);
 
}

function ajaxGetEventCharge(inEventType,tgtField) {
var url = "index.php?option=com_fabrik&format=raw&task=plugin.userAjax&method=getEventCharge&eventType=" + inEventType;
var refocus = document.id(tgtField);
	new Request({url:url
							,onComplete: function(response) {
								if (response != '') {
									refocus.value = response;
								} else {
									alert('Unable to find item cost');
									refocus.focus();
								}
							}
							}).request();
//	new Ajax(url, 
//		{
//			onComplete: function(response) {
//				if (response != '') {
//					refocus.value = response;
//				} else {
//					alert('Unable to find item cost');
//					refocus.focus();
//				}
//			}
//		}
//	).request();
}



function displayEventDetail() {
var mailFeeCode = Fabrik.blocks.form_21.formElements.get('account_event___current_mail_fee_code').getValue();

	if (requestedDetailRows() > 0) {
		$('group44').show();
	} else {
		$('group44').hide();
	}
}

function requestedDetailRows() {
var chboxValues = Fabrik.blocks.form_21.formElements.get('account_event___event_type_list').getValue();
var detailRows=0;

	for (var i=0;i<chboxValues.length;i++)
	{
		if (chboxValues.indexOf(i) > 0) {
			detailRows++;
  	}		
	}
	return(detailRows);
}

function totalDetailRow(rowNumber) {
var currentRows = document.id('fabrik_repeat_group_44_counter').getValue();
}

function addDetailRow(eventTypeCode) {
var currentRows = document.id('fabrik_repeat_group_44_counter').getValue();


}

function checkDetailRow(eventTypeCode) {
var chboxValues = Fabrik.blocks.form_21.formElements.get('account_event___event_type_list').getValue();
var eventTypes = $('group44').getElements('input[name*=account_event_detail___event_type]');
var eventRow = -1;

	for (var i=0;i<eventTypes.length;i++)
	{
		if (eventTypes.indexOf(i) >= 0) {
  	}
	}
	return(eventRow);
}
