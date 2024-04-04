document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('sameAddress');
    const billingAddress = document.getElementById('bill');
    const homeAddress = document.getElementById('home');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            homeAddress.value = billingAddress.value;
            homeAddress.disabled = true;
        } else {
            homeAddress.disabled = false;
        }
    });


});