let output = document.getElementById("output");
let body = document.querySelector('body');

    function display(num) {
        output.value += num;
    }
    function Calc() {
        try {
            output.value = eval(output.value);
        } catch (error) {
            output.value = "Inoperative";
        }
        
    }
    function toggle() {
        body.classList.toggle('night')
    }
    function Clear() {
        output.value = ""
    }
    function negative() {
        output.value = -(output.value);
    }
    function del() {
        output.value = output.value.slice(0,-1);
    }
    