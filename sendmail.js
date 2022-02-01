document.querySelector(".contact_form").addEventListener("submit", submitForm);


function submitForm(e) {

    e.preventDefault();

    //Get Form Values
    let name = document.querySelector('.name').value;
    let email = document.querySelector('.email').value;
    let message = document.querySelector('.message').value;

    sendEmail(name, email, message);

    document.querySelector(".contact_form").reset();



}

function sendEmail(name, email, message) {
    Email.send({
            Host: "smtp.gmail.com",
            Username: "waleedbinasad20@gmail.com",
            Password: "fhlvlkffzwnmrjwm",
            To: 'waleedbinasad20@gmail.com',
            From: "waleedbinasad20@gmail.com",
            Subject: `One New Message from your Portforlio WebSite `,
            Body: `<strong>WALEED CONTACT FORM</strong> <br/><br/> Name: ${name} <br/> <br/> Email: ${email} <br/><br/> Message: ${message}`,
        })
        .then(function(message) {
            document.getElementById("MessageSent").innerHTML += "<p> Thank You for Contacting me. I will be in touch with you!</p>";
        });
}