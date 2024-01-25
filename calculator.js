function calculateResult(){
    var fdigit = document.getElementById('fd-inp').value;
    var ldigit = document.getElementById('sd-inp').value;
    var operation = document.getElementById('op-inp').value;
    var val;
    var show_res;
    var res = document.querySelector('.show-res');
    if(operation==='+' || operation==='plus'|| operation==='Plus'){
        val = parseFloat(fdigit)  +parseFloat(ldigit);
        show_res = 'Addition: '+val
    }
    else if(operation==='-' || operation==='minus'|| operation==='Minus'){
        val = parseFloat(fdigit) -parseFloat(ldigit);
        show_res = 'Substraction: '+val
    }else if(operation==='/' || operation==='divide'|| operation==='Divide' || operation==='Division' || operation==='division'){
        val = parseFloat(fdigit) / parseFloat(ldigit);
        show_res = 'Division: '+val
    }else if(operation==='*' || operation==='multiple'|| operation==='Multiple' || operation==='Multiplication' || operation==='multiplication'){
        val = parseFloat(fdigit) * parseFloat(ldigit);
        show_res = 'Multiplication: '+val
    }
    else{
        show_res = 'Input a valid operation'
    }
    res.textContent = show_res;
    res.style.display = 'block';
}