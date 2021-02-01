
/* add code here  */
window.addEventListener('load', function(){
    var hilightableInputs = document.querySelectorAll(".hilightable");
    for(i=0; i < hilightableInputs.length; i++) {
        var toggle = (event) => { event.target.classList.toggle('highlight')}
        hilightableInputs[i].addEventListener('focus', toggle)
        hilightableInputs[i].addEventListener('blur', toggle)
    }}
)