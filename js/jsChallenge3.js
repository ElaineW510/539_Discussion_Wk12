function challenge3() {
    var standingSelected = document.querySelector('input[name="standing"]:checked');
    var gradDateSelected = document.querySelector('input[name="gradDate"]:checked');

    if (!standingSelected || !gradDateSelected) {
        alert("Please select an option for both class standing and anticipated graduation date.");
        return false;
    }

    return true;
}