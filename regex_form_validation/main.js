// regex expression needed for most emails ^\w{4,10}\.\w{4,10}\@\w{2,10}\.\w{2,5}$  // david.hauser@gmail.com 100% match
// let reg2 = new RegExp(/[a-z]{2,12}/,'i'); _____ Other way to make a regex
// let reg = /[a-z]{2,12}/gi;
// username: /^[a-z\d]{5,12}$/
// slug: /^[a-z\d-]{8,20}$/
const inputs = document.querySelectorAll('input'); // html collection

const patterns = {
    firstname: /^[\w@-]{2,12}$/,
    lastname: /^[\w@-]{2,12}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w@-]{10,20}$/,
    telephone: /^\d{10}$/,
};

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
    // console.log(regex.test(field.value));
};

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        //console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});