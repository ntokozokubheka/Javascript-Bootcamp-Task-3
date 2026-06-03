document.addEventListener('DOMContentLoaded', function() {
    var myForm = document.getElementById('regForm');
    var timerBtn = document.getElementById('resendBtn');

    myForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var uField = document.getElementById('usr');
        var eField = document.getElementById('eml');
        var pField = document.getElementById('pwd');
        var tBox = document.getElementById('chkTerms');

        var uErr = document.getElementById('usrErr');
        var eErr = document.getElementById('emlErr');
        var pErr = document.getElementById('pwdErr');
        var cErr = document.getElementById('chkErr');

        var mailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var passes = true;

        uField.style.border = "1px solid #b3b3b3";
        uErr.textContent = "";
        eField.style.border = "1px solid #b3b3b3";
        eErr.textContent = "";
        pField.style.border = "1px solid #b3b3b3";
        pErr.textContent = "";
        cErr.textContent = "";

        if (uField.value.trim() === "") {
            uField.style.border = "1px solid red";
            uErr.textContent = "Username field cannot be left blank.";
            passes = false;
        }

        if (eField.value.trim() === "") {
            eField.style.border = "1px solid red";
            eErr.textContent = "Email address is required.";
            passes = false;
        } else if (!mailRx.test(eField.value.trim())) {
            eField.style.border = "1px solid red";
            eErr.textContent = "Please enter a valid structured email format.";
            passes = false;
        }

        if (pField.value === "") {
            pField.style.border = "1px solid red";
            pErr.textContent = "Password security field is empty.";
            passes = false;
        } else if (pField.value.length < 8) {
            pField.style.border = "1px solid red";
            pErr.textContent = "Security constraint error: Must be 8 characters or more.";
            passes = false;
        }

        if (!tBox.checked) {
            cErr.textContent = "You must acknowledge and accept the terms.";
            passes = false;
        }

        if (passes) {
            alert("Success! Form layout processed safely without drops.");
            myForm.reset();
        }
    });

    var countValue = 10;
    if (timerBtn) {
        var clockLoop = setInterval(function() {
            countValue--;
            timerBtn.textContent = "Resend Verification (" + countValue + "s)";
            
            if (countValue <= 0) {
                clearInterval(clockLoop);
                timerBtn.removeAttribute('disabled');
                timerBtn.textContent = "Resend Verification";
            }
        }, 1000);
    }
});