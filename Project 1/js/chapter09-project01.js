window.addEventListener('load', function(){
    var hilightableInputs = document.querySelectorAll(".hilightable");
    for(i=0; i < hilightableInputs.length; i++) {
        var toggle = (event) => { event.target.classList.toggle('highlight')}
        hilightableInputs[i].addEventListener('focus', toggle)
        hilightableInputs[i].addEventListener('blur', toggle)
    }

var form=document.getElementById("mainForm");
form.addEventListener("submit", submissionCheck);
function submissionCheck(event){
    var requiredInputs = document.querySelectorAll(".required");
    for(i=0; i < requiredInputs.length; i++){
        if(requiredInputs[i].value == "")
        {
            event.preventDefault();
            requiredInputs[i].classList.add("error");
        }
        else {
            requiredInputs[i].classList.remove("error");
        }
    }
}
form.addEventListener("reset", resetForm)
function resetForm(event){
    var requiredInputs = document.querySelectorAll(".required");
    for(i=0; i < requiredInputs.length; i++){
        requiredInputs[i].classList.remove("error");
    }
}
})

