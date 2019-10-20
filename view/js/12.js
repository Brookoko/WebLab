function ValidateName(form){
    let fullname = form.person_name.value;
    let eng_res = fullname.match(/([A-Z]{1}[a-z]*\s*)+$/y);
    let rus_res = fullname.match(/([А-Я]{1}[а-я]*\s*)+$/y);
    if(xor(eng_res,rus_res)) form.result.value = "Correct";
    else form.result.value = "Incorrect"

}

function ValidateMail(form){
    let email = form.person_mail.value;
    let res = email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
    form.result.value = res == null ? "Incorrect" : "Correct";
}

function ValidatePhone(form){
    let phoneNumber = form.person_phone.value;
    let res = phoneNumber.match(/^[\+]?[0-9]{0,3}[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{0,2}[-\s\.]?[0-9]{0,2}$/im);
    form.result.value = res == null ? "Incorrect" : "Correct";
}

function xor(a,b){
    if((a && !b) || (!a && b)) return true;
    return false;

}