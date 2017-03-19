function formValidation()  
{  
    var passid = document.getElementById("password").value;  
    var uname = document.getElementById("name").value;  
    var email = document.getElementById("email").value;

    if(passid_validation(passid,7,12))   
    if(allLetter(uname))     
    return false;  
    }  

    function correctEmail(email) {
        if(!email.length ==0 || !email.match("/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/"))
        alert("Pleae specify correct email");
        else
            return true;
    }

    function allLetter(uname)  
    {   
        var letters = /^[A-Za-z]+$/;  
        if(uname.match(letters) || uname.length != 0)  
        {  
            return true;  
        }  
        else  
        {  
            alert('Username must have alphabet characters only');   
            return false;  
        }  
    }  

    function passid_validation(passid,mx,my)  
    {  
        var passid_len = passid.length;  
        if (passid_len == 0 ||passid_len >= my || passid_len < mx)  
        {  
            alert("Password should not be empty / length be between "+mx+" to "+my);  
            return false;  
        }  
        return true;  
}  
