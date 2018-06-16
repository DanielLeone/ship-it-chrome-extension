console.log("it's probably fine, just ship it!");
var style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(`
    @keyframes rainbow { 
        0%{background-position:0% 82%}
        50%{background-position:100% 19%}
        100%{background-position:0% 82%}
    }
    
    #fulfill-pullrequest:hover {
        animation: rainbow 0.5s ease infinite !important;
        background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3) !important;
        background-size: 1800% 1800% !important;
    }
`));
document.head.appendChild(style);

var shipItBtn = document.getElementById('fulfill-pullrequest');
var approveBtn = document.getElementById('approve-button');
if (shipItBtn) {
    shipItBtn.firstElementChild.textContent = 'Ship It!';
}
if (approveBtn) {
    approveBtn.firstElementChild.textContent = 'High Five!';
}
