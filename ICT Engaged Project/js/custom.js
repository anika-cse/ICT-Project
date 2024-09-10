//get elements from html

// Name input;
var uName = document.getElementById("uName");
var uNameErr = document.getElementById("uNameErr");

// phone input;
var utel = document.getElementById("utel");
var utelErr = document.getElementById("utelErr");

// email input; 
var uEmail = document.getElementById("uEmail");
var uEmailErr = document.getElementById("uEmailErr");

// textarea input;
var mess = document.getElementById("mess");
var messErr = document.getElementById("messErr");

// password input;
var pass = document.getElementById("pass");
var passErr = document.getElementById("passErr");

// confirm password input;
var rePass = document.getElementById("rePass");
var rePassErr = document.getElementById("rePassErr");



$(document).ready(function(){
    'use strict';

    // banner slider
    $('.banner-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3500,
    });

    // animation css when scroll
    new WOW().init();

});


// a function for submit button;

function subm()
{

      // name field;
      if(uName.value == "")
      {
          uName.style.borderColor = "#008080";
          uNameErr.innerHTML = "Enter Your Username";
          uName.focus();
          return false;
      }
  
      // email field;
      if(uEmail.value == "")
      {
        uEmail.style.borderColor = "#008080";
        uEmailErr.innerHTML = "Enter Your User Email";
          uEmail.focus();
          return false;
      }

       // phone field;
       if(utel.value == "")
       {
         utel.style.borderColor = "#008080";
         utelErr.innerHTML = "Enter Your Phone Number";
           utel.focus();
           return false;
       }
  
      // textarea field;
      if(mess.value == "")
      {
          mess.style.borderColor = "#008080";
          messErr.innerHTML = "Enter Your Message";
          mess.focus();
          return false;
      }

}


// a function to remove error after fill up input feild;
function errValid()
{   
    // name error valid;
    if(uName.value != "")
    {
        uName.style.borderColor = "#000000";
        uNameErr.innerHTML = "";
    }

    // email error valid;
    if(uEmail.value != "")
    {
        uEmail.style.borderColor = "#5F7A61";
        uEmailErr.innerHTML = "";
    }

     // phone error valid;
     if(uEmail.value != "")
     {
         utel.style.borderColor = "#5F7A61";
         utel.innerHTML = "";
     }

    // password error valid;
    if(mess.value != "")
    {
        mess.style.borderColor = "#5F7A61";
        messErr.innerHTML = "";
    }

}


// Login form function for login In button

// a function for submit button;

function loginbtn()
{
  
      // email field;
      if(uEmail.value == "")
        {
          uEmail.style.borderColor = "#008080";
          uEmailErr.innerHTML = "Enter Your UserEmail";
            uEmail.focus();
            return false;
        }

      // password field;
      if(pass.value == "")
        {
            pass.style.borderBottomColor = "red";
            passErr.innerHTML = "Enter Your Password";
            pass.focus();
            return false;
        }

}

// a function to remove error after fill up input feild for Lognin button;
function errValidLogin()
{   

    // email error valid;
    if(uEmail.value != "")
    {
        uEmail.style.borderBottomColor = "#5F7A61";
        uEmailErr.innerHTML = "";
    }

    // password error valid;
    if(pass.value != "")
    {
        pass.style.borderBottomColor = "#5F7A61";
        passErr.innerHTML = "";
    }
}

// Sign up form function for Sign up button

// a function for signup button;

function signupbtn()
{
  
       // name field;
       if(uName.value == "")
        {
            uName.style.borderColor = "#008080";
            uNameErr.innerHTML = "Enter Your Username";
            uName.focus();
            return false;
        }
    
        // email field;
        if(uEmail.value == "")
        {
          uEmail.style.borderColor = "#008080";
          uEmailErr.innerHTML = "Enter Your User Email";
            uEmail.focus();
            return false;
        }

      
       // password field;
       if(pass.value == "")
        {
            pass.style.borderBottomColor = "red";
            passErr.innerHTML = "Enter Your Password first";
            pass.focus();
            return false;
        }
    
        // password length;
        if(pass.value.length < 6)
        {
            pass.style.borderBottomColor = "red";
            passErr.innerHTML = "Enter at least 6 Characters";
            pass.focus();
            return false;
        }
    
        // confirm password field;
        if(rePass.value == "")
        {
            rePass.style.borderBottomColor = "red";
            rePassErr.innerHTML = "Confirm Your Password";
            rePass.focus();
            return false;
        }
    
        // confirm password length;
        if(rePass.value != pass.value)
        {
            rePass.style.borderBottomColor = "red";
            rePassErr.innerHTML = "Password did not match";
            rePass.focus();
            return false;
        }

}


// a function to remove error after fill up input feild;
function errValid()
{   
    // name error valid;
    if(uName.value != "")
    {
        uName.style.borderBottomColor = "#5F7A61";
        uNameErr.innerHTML = "";
    }

    // email error valid;
    if(uEmail.value != "")
     {
        uEmail.style.borderBottomColor = "#5F7A61";
        uEmailErr.innerHTML = "";
     }
    
     // password error valid;
    if(pass.value != "")
     {
        pass.style.borderBottomColor = "#5F7A61";
        passErr.innerHTML = "";
    }

     // confirm password error valid;
     if(rePass.value != "")
     {
        rePass.style.borderBottomColor = "#5F7A61";
        rePassErr.innerHTML = "";
     }
}


//create portfoilo page function are here

document.querySelectorAll('.next-step').forEach(button => {
    button.addEventListener('click', function() {
        const currentStep = this.closest('.step');
        const nextStep = currentStep.nextElementSibling;
        if (nextStep && nextStep.classList.contains('step')) {
            currentStep.style.display = 'none';
            nextStep.style.display = 'block';
            updateProgressBar(nextStep);
        }
    });
});

document.querySelectorAll('.prev-step').forEach(button => {
    button.addEventListener('click', function() {
        const currentStep = this.closest('.step');
        const prevStep = currentStep.previousElementSibling;
        if (prevStep && prevStep.classList.contains('step')) {
            currentStep.style.display = 'none';
            prevStep.style.display = 'block';
            updateProgressBar(prevStep);
        }
    });
});

document.getElementById('addShareBtn').addEventListener('click', function() {
    const shareCard = document.querySelector('.share-card').cloneNode(true);
    document.getElementById('sharesContainer').appendChild(shareCard);
});

document.getElementById('sharesContainer').addEventListener('click', function(e) {
    if (e.target && e.target.matches('.remove-share')) {
        e.target.closest('.share-card').remove();
    }
});

function updateProgressBar(step) {
    const steps = document.querySelectorAll('.step');
    const stepIndex = Array.from(steps).indexOf(step);
    const progress = ((stepIndex + 1) / steps.length) * 100;
    document.querySelector('.progress-bar').style.width = `${progress}%`;
}






uName.addEventListener("blur", errValid);
uEmail.addEventListener("blur", errValid);
utel.addEventListener("blur", errValid);
mess.addEventListener("blur", errValid);
pass.addEventListener("blur", errValid);
rePass.addEventListener("blur", errValid);