function sendEmail()
{
    var email= document.getElementById("email").value;
    var subject= "Request To Connecting-Reg.";
    var body="Hello, I would like to connect with you: ";
    window.location.href="mailto:"+encodeURI(email)+"?subject="+encodeURIComponent(subject)+"&body="
    +encodeURIComponent(body)+"&cc=donaelsaj@gmail.com";
}   