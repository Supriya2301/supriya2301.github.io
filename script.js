function sendMessage() {
    var clientName = document.getElementById('input-name').value;
    var clientEmail = document.getElementById('input-email').value;
    var clientMessage = document.getElementById('input-message').value;
    var message = "Name: " + clientName +"<br/> Email: " + clientEmail +"<br/> Message: "+ clientMessage;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "starsupriya23@gmail.com",
        Password : "84D235E6A4D597769DFFAAE3171313238226",
        To : "starsupriya23@gmail.com",
        From : "starsupriya23@gmail.com",
        Subject : "New message on Portfolio",
        Body : message
    }).then(
      message => alert("Thankyou! Message sent successfully.")
    );
}

document.getElementById('btn').addEventListener('click', function() {
  this.style.backgroundColor = '#4F46E5';
});
