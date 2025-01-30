let buttons = document.querySelectorAll('.btn');
let lastClickedButton = null;

buttons.forEach(button => {
    button.addEventListener("click", function() {

        if (lastClickedButton) {
            lastClickedButton.style.background = ""; 
        }
        

        this.style.background = "#77FF00"; 
        
    
        lastClickedButton = this; 
    });
});