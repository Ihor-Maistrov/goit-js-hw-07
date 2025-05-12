const formElem = document.querySelector(".login-form");

formElem.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
        userPassword: e.target.elements.email.value.trim(),
        userEmail: e.target.elements.password.value.trim(),
    };
    if (!data.userPassword || !data.userEmail) {
        alert('All form fields must be filled in')
        return;
    };
    console.log(data);
    e.target.reset();
});

