let pass1 = document.querySelector('#pass1');
let pass2 = document.querySelector('#pass2');
let result = document.querySelector('h1');

function checkPassword() {
    result.innerText = pass1.value == pass2.value ? 'Matching' : 'Not Matching';
}
pass1.addEventListener('keyup', () => {
    if (pass2.value.length != 0) checkPassword();
})
pass2.addEventListener('keyup', checkPassword);