function sendEmail()  {
    Email.send({
        SecureToken :"648a6278-6bee-4314-9303-1f1ac3406875"
        To : 'rasbamba@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New Contsct From Enquiry",
        Body :'Name: ' + document.getElementById('name').value
        + '<br> Emali : ' + document.getElementById('emali').value
        + '<br> Phone Number : ' + document.getElementById('phone').value
        + '<br> Message : ' + document.getElementById('message').value
    }).then(
      message => alert("Message sent successfully  ")
    );

}/**
 * C48A34FA7DEC5B517B9D3B42F6CE7314308B98A9AF726E2765DAEDC484ABC16209A3E62B6A7D19C71CDD069706CEDD55

token: 648a6278-6bee-4314-9303-1f1ac3406875
 */