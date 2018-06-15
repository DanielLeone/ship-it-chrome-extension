console.log("ship it already mate!");
var shipItBtn = document.getElementById('fulfill-pullrequest');
var approveBtn = document.getElementById('approve-button');
if (shipItBtn) {
    shipItBtn.firstElementChild.textContent = 'Ship It!';
}
if (approveBtn) {
    approveBtn.firstElementChild.textContent = 'High Five!';
}
