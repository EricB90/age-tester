/**
 * Build an age verification form
 * 
 * Define form
 * Access input values
 * Validate current date against date entered
 * If the difference in years is >= 21, return approval
 * If the difference in years is < 21, return denial
 * Display returned message
 * 
 */

let form = document.getElementById('form');

function submit(e) {
    e.preventDefault();
    let birthDate = document.getElementById('birthDate').value;
    var d = new Date();
    d.setFullYear(d.getFullYear() - 21);
    let validDate = d;
    console.log(validDate);
    
    let output = document.querySelector('.output-section');
    if (Date.parse(birthDate) <= Date.parse(validDate)) {
        output.innerHTML = `<p class="accept-card">Accepted!</p>`;
    } else if (Date.parse(birthDate) > Date.parse(validDate)) {
        output.innerHTML = `<p class="deny-card">DENIED!</p>`;
    } else {
        output.innerHTML =`<p class="what-card">What</p>`;
    };
};

form.addEventListener('submit', submit)