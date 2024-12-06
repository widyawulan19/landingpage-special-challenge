// Parallax
let text = document.getElementById('text');
let text2 = document.getElementById('text2');
let main1 = document.getElementById('main1');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1.5 + 'px';
    text2.style.marginTop = value * 1.5 + 'px';

});

//function untuk membaca data dari input form
function handleGetFormData(){
    const formData = {
        name: document.getElementById('name').value,
        city: document.getElementById('city').value,
        email: document.getElementById('email').value,
        zipCode: document.getElementById('zip-code').value,
        status: document.getElementById('status').checked,
        textArea: document.querySelector('textarea[name="text-area"]').value,
    };
    return formData;
}

//function untuk validasi data inputan adalah string
function isNumber(str){
    return !isNaN(str);
} 

//function checkbox
function checkboxIsChecked(){
    return document.getElementById('status').checked;
}

//function untuk proses validasi untuk memastikan bahwa semua inputan sudah diisi oleh user
function validateFormData(data){
    if(
        data &&
        isNumber(data.zipCode) &&
        checkboxIsChecked()
    ){
        return true;
    }
    return false;
}

//submit inputan
function submit(event){
    event.preventDefault();

    const formData = handleGetFormData();
    const warningDiv = document.getElementById('warning');

    if (validateFormData(formData)){
        warningDiv.textContent='';
        alert("All data is valid");
        console.log('All data is valid');
    }else{
        warningDiv.textContent='';
        alert('Periksa form anda sekali lagi');
        console.log('Form data validation failed');
    }
}

const form1 = document.getElementById('form1-container');
form1.addEventListener('submit', submit);

//Output: Unspecified AssertionError