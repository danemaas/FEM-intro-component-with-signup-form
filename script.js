function isValidEmail(email) {
    // Regular expression pattern for a valid email address
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    // Test the email against the pattern
    return emailPattern.test(email);
}

function checkInput() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (firstName == "") {
        document.getElementById('error-firstName').classList.remove('d-none');
        document.getElementById('error-msgFirstName').classList.remove('d-none');
        document.getElementById('wrapper1').classList.remove('mb-3');

        setTimeout(() => {
            document.getElementById('error-firstName').classList.add('d-none');
            document.getElementById('error-msgFirstName').classList.add('d-none');
            document.getElementById('wrapper1').classList.add('mb-3');
        }, 5000);
    }
    if (lastName == "") {
        document.getElementById('error-lastName').classList.remove('d-none');
        document.getElementById('error-msgLastName').classList.remove('d-none');
        document.getElementById('wrapper2').classList.remove('mb-3');

        setTimeout(() => {
            document.getElementById('error-lastName').classList.add('d-none');
            document.getElementById('error-msgLastName').classList.add('d-none');
            document.getElementById('wrapper2').classList.add('mb-3');
        }, 5000);
    }
    if (email == "" || isValidEmail(email) == false) {
        document.getElementById('error-email').classList.remove('d-none');
        document.getElementById('error-msgEmail').classList.remove('d-none');
        document.getElementById('wrapper3').classList.remove('mb-3');

        setTimeout(() => {
            document.getElementById('error-email').classList.add('d-none');
            document.getElementById('error-msgEmail').classList.add('d-none');
            document.getElementById('wrapper3').classList.add('mb-3');
        }, 5000);
    }
    if (password == "") {
        document.getElementById('error-password').classList.remove('d-none');
        document.getElementById('error-msgPassword').classList.remove('d-none');
        document.getElementById('wrapper4').classList.remove('mb-3');

        setTimeout(() => {
            document.getElementById('error-password').classList.add('d-none');
            document.getElementById('error-msgPassword').classList.add('d-none');
            document.getElementById('wrapper4').classList.add('mb-3');

        }, 5000);
    }
}