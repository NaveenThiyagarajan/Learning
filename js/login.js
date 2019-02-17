var form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let uName = document.getElementById("usr").value;
    let pWord = document.getElementById("pwd").value;
    if (!uName || !pWord) {
        text = "<div class=\"alert alert-danger\">Please enter value for both Username and Password</div>";
        document.getElementById("result").innerHTML = text;
    }
    else {
        let text = "<div class=\"alert alert-success\">Success!! <br>Username: " + uName + "<br>Password: " + pWord + "</div>";
        const passwordRegex = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@_#\$%\^&\*])(?=.{8,})/);
        const passStart = RegExp(/^[a-zA-Z0-9_]/);
        const emailRegex = RegExp(/^[a-zA-Z0-9.]{3,}@[a-zA-Z0-9]{2,}.[a-zA-Z]{3,}$/);
        if (pWord.length < 8) {
            text = "<div class=\"alert alert-danger\"><strong>Password should have atleast 8 characters!!!</strong></div>";
        }
        if (!passStart.test(pWord) || !passwordRegex.test(pWord)) {
            text = "<div class=\"alert alert-danger\"><strong>Please enter a valid password!!!</strong></div>";
        }
        if (!emailRegex.test(uName)) {
            text = "<div class=\"alert alert-danger\"><strong>Please enter a valid username!!!</strong></div>";
        }
        document.getElementById("result").innerHTML = text;
    }
})