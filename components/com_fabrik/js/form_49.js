//  This must be stored in /components/com_fabrik/js
//  This is loaded only for form 49 (Ownership Change)
//  Note - In Change action, the ID field contains the typed text for an auto-complete element.
//         It contains the ID in the Blur action.
//
function changeOwnerLoad() {
//	$('form_change_ownership___ownership_id').getParent().getParent().hide();
	$('form_change_ownership___seller_account_id').getParent().getParent().hide();
	$('form_change_ownership___new_account_id').getParent().getParent().hide();
	$('form_change_ownership___transfer_date').getParent().getParent().hide();
	changeOwnerProspectShow(false);
	changeOwnerProspect2Show(false);
	changeOwnerAddressShow(false);
	$('form_change_ownership___primary_flag').getParent().getParent().hide();
	$('form_change_ownership___new_primary_local_address_id').getParent().getParent().hide();
}

function changeOwnerReset() {
	changeOwnerLoad();
	Fabrik.blocks.form_49.formElements.form_change_ownership___property_id.update('');
//	Fabrik.blocks.form_49.form['form_change_ownership___property_id-auto-complete'].update('');
//	Fabrik.blocks.form_49.form['form_change_ownership___new_account_id-auto-complete'].update('');
//	Fabrik.blocks.form_49.formElements.form_change_ownership___ownership_id.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___new_account_id.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___transfer_date.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___first_and_middle_name.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___last_name.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___company_name.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___email.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___cellphone.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___preferred_phone.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___first_and_middle_name2.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___last_name2.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___email2.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___cellphone2.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___preferred_phone2.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___country_code.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___address_line1.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___address_line2.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___address_line3.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___address_line4.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___city.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___state_code.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___zip.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___zip_plus4.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___phone.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___another_prospect_flag.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___primary_flag.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___new_primary_local_address_id.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___local_mail_flag.update('');
	Fabrik.blocks.form_49.formElements.form_change_ownership___seller_account_id.update('');
}

function changeOwnerShown() {
var property_owner = Fabrik.blocks.form_49.form['form_change_ownership___property_id-auto-complete'].get('value');
var property_id = Fabrik.blocks.form_49.formElements.form_change_ownership___property_id.get('value');
	if (property_owner == '') {
//		$('form_change_ownership___ownership_id').getParent().getParent().hide();
		$('form_change_ownership___seller_account_id').getParent().getParent().hide();
		$('form_change_ownership___new_account_id').getParent().getParent().hide();
		$('form_change_ownership___transfer_date').getParent().getParent().hide();
		$('form_change_ownership___new_primary_local_address_id').getParent().getParent().hide();
		changeOwnerProspectShow(false);
	}
// Bug in Fabrik causing this to incorrectly be true.
//	else if (property_id == property_owner) {
//		alert('You must select a valid property from the list.');
//		Fabrik.blocks.form_49.formElements.form_change_ownership___property_id.update('');
//		Fabrik.blocks.form_49.formElements.form_change_ownership___property_id.focus();
//		changeOwnerProspectShow(false);
//	}
	else {
//		$('form_change_ownership___ownership_id').getParent().getParent().show();
		$('form_change_ownership___seller_account_id').getParent().getParent().show();
		$('form_change_ownership___new_account_id').getParent().getParent().show();
		$('form_change_ownership___transfer_date').getParent().getParent().show();
		$('form_change_ownership___new_primary_local_address_id').getParent().getParent().show();
	}
//   alert('property_owner: '+property_owner);
}

function changeOwnerAccountSelect() {
var new_account_name = Fabrik.blocks.form_49.form['form_change_ownership___new_account_id-auto-complete'].get('value');
var new_account_id = Fabrik.blocks.form_49.formElements.form_change_ownership___new_account_id.get('value');
	if (new_account_id == new_account_name && new_account_name > '') {
		changeOwnerProspectShow(true);
		Fabrik.blocks.form_49.formElements.form_change_ownership___primary_flag.update('1');
		$('form_change_ownership___primary_flag').getParent().getParent().hide();
	}
	else {
		changeOwnerProspectShow(false);
		Fabrik.blocks.form_49.formElements.form_change_ownership___primary_flag.update('0');
		$('form_change_ownership___primary_flag').getParent().getParent().show();
	}
}

function changeOwnerAnotherProspectSelect() {
var another_prospect_flag = Fabrik.blocks.form_49.formElements.form_change_ownership___another_prospect_flag.get('value');
	if (another_prospect_flag == "1") {
		changeOwnerProspect2Show(true);
	}
	else {
		changeOwnerProspect2Show(false);
	}
}

function changeOwnerProspectShow(show) {
	if (show) {
		$('form_change_ownership___local_mail_flag').getParent().getParent().show();
		$('form_change_ownership___first_and_middle_name').getParent().getParent().show();
		$('form_change_ownership___last_name').getParent().getParent().show();
		$('form_change_ownership___company_name').getParent().getParent().show();
		$('form_change_ownership___email').getParent().getParent().show();
		$('form_change_ownership___cellphone').getParent().getParent().show();
		$('form_change_ownership___preferred_phone').getParent().getParent().show();
		$('form_change_ownership___another_prospect_flag').getParent().getParent().show();
		changeOwnerAddressShow(true);
	}
	else {
		$('form_change_ownership___local_mail_flag').getParent().getParent().hide();
		$('form_change_ownership___first_and_middle_name').getParent().getParent().hide();
		$('form_change_ownership___last_name').getParent().getParent().hide();
		$('form_change_ownership___company_name').getParent().getParent().hide();
		$('form_change_ownership___email').getParent().getParent().hide();
		$('form_change_ownership___cellphone').getParent().getParent().hide();
		$('form_change_ownership___preferred_phone').getParent().getParent().hide();
		$('form_change_ownership___another_prospect_flag').getParent().getParent().hide();
		changeOwnerAddressShow(false);
	}
}

function changeOwnerProspect2Show(show) {
	if (show) {
		$('form_change_ownership___first_and_middle_name2').getParent().getParent().show();
		$('form_change_ownership___last_name2').getParent().getParent().show();
		$('form_change_ownership___email2').getParent().getParent().show();
		$('form_change_ownership___cellphone2').getParent().getParent().show();
		$('form_change_ownership___preferred_phone2').getParent().getParent().show();
	}
	else {
		$('form_change_ownership___first_and_middle_name2').getParent().getParent().hide();
		$('form_change_ownership___last_name2').getParent().getParent().hide();
		$('form_change_ownership___email2').getParent().getParent().hide();
		$('form_change_ownership___cellphone2').getParent().getParent().hide();
		$('form_change_ownership___preferred_phone2').getParent().getParent().hide();
	}
}
function changeOwnerAddressShow(show) {
	if (show) {
		$('form_change_ownership___remote_address_label').getParent().getParent().show();
		$('form_change_ownership___country_code').getParent().getParent().show();
		$('form_change_ownership___address_line1').getParent().getParent().show();
		$('form_change_ownership___address_line2').getParent().getParent().show();
		$('form_change_ownership___address_line3').getParent().getParent().show();
		$('form_change_ownership___address_line4').getParent().getParent().show();
		$('form_change_ownership___city').getParent().getParent().show();
		$('form_change_ownership___state_code').getParent().getParent().show();
		$('form_change_ownership___zip').getParent().getParent().show();
		$('form_change_ownership___zip_plus4').getParent().getParent().show();
		$('form_change_ownership___phone').getParent().getParent().show();
	}
	else {
		$('form_change_ownership___remote_address_label').getParent().getParent().hide();
		$('form_change_ownership___country_code').getParent().getParent().hide();
		$('form_change_ownership___address_line1').getParent().getParent().hide();
		$('form_change_ownership___address_line2').getParent().getParent().hide();
		$('form_change_ownership___address_line3').getParent().getParent().hide();
		$('form_change_ownership___address_line4').getParent().getParent().hide();
		$('form_change_ownership___city').getParent().getParent().hide();
		$('form_change_ownership___state_code').getParent().getParent().hide();
		$('form_change_ownership___zip').getParent().getParent().hide();
		$('form_change_ownership___zip_plus4').getParent().getParent().hide();
		$('form_change_ownership___phone').getParent().getParent().hide();
	}
}
