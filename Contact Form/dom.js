'use strict';

const contactForm = document.querySelector('[data-contact-form]');
contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const fName = document.querySelector('#fname').value;
    const lName = document.querySelector('#lname').value;
    let Gender;
    if (document.querySelector('#genderM').checked == true) {
        Gender = 'M';
    } else if (document.querySelector('#genderF').checked == true) {
        Gender = 'F';
    }
    const Message = document.querySelector('#message').value;
    let error = false;
        if (typeof fName === "undefined" || fName === "" || !(isNaN(fName))) {
            document.querySelector('#fname').classList.add('error');
            error = true;
        }
        else{
            document.querySelector('#fname').classList.remove('error');
        }
        if (typeof lName === "undefined" || lName === "" || !(isNaN(lName))) {
            document.querySelector('#lname').classList.add('error');
            error = true;
        }
        else{
            document.querySelector('#lname').classList.remove('error');
        }
        if (typeof Gender === "undefined" || Gender === "") {
            document.querySelector('.gender-title').classList.add('error');
            error = true;
        }
        else{
            document.querySelector('.gender-title').classList.remove('error');
        }
        if (typeof Message === "undefined" || Message === "") {
            document.querySelector('#message').classList.add('error');
            error = true;    
        }
        else{
            document.querySelector('#message').classList.remove('error');
        }
    if (!error) {
        document.querySelector('.banner-name').innerHTML =fName;
        document.querySelector('.confirmation-banner').classList.add('success');
        console.log("Name - Surname:", fName,"-",lName,",Gender:", Gender,",Message:", Message);        
    }
}
document.getElementById("bannerhide").onclick = function(){
    document.querySelector('.confirmation-banner').classList.remove('success');
}