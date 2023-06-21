var code;



function createCaptcha(){
    document.getElementById('captcha').innerHTML = '';
    var charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    var lengthCaptcha = 6;
    var captcha = [];

    for(var i=0; i<lengthCaptcha; i++){
        var index = Math.floor(Math.random() * charsArray.length + 1); //generates a random index within the range of the charsArray length
        if(captcha.indexOf(charsArray[index]) == -1){ //checks if the randomly generated character is not already present in the captcha array.
            captcha.push(charsArray[index]);
        }
        else{
            i--;
        }
    }
    var canv = document.createElement('canvas');
    canv.id = 'captcha';
    canv.width = 100;
    canv.height = 50;
    var ctx = canv.getContext('2d');
    ctx.font = '25px Georgia';
    ctx.strokeText(captcha.join(''), 0, 30);

    code = captcha.join('');
    document.getElementById('captcha').appendChild(canv);
}

function validateCaptcha(){
    event.preventDefault();
    debugger
    if(document.getElementById('captchaTextBox').value == code){
        alert('Valid Captcha');
        createCaptcha();
        document.getElementById('captchaTextBox').value = '';
        
    }
    else{
        alert('Invalid Captcha !! Try again');
        document.getElementById('captchaTextBox').value = '';
    }
}