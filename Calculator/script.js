// script.js

let expression = '';

function insertexp(value) {
    if(expression.length <=10)
            expression += value;
    else
        alert('Limited Number of Terms Only! Please Press Clear and then Again Calculate');

    document.getElementById('expr').innerText = expression;
    // document.getElementById('result').innerText=eval(expression);
}

function clearEntry() {
    expression = expression.slice(0, -1);
    document.getElementById('expr').innerText = expression;
    if(expression!='')
        document.getElementById('result').innerText=eval(expression);
    else
        document.getElementById('result').innerText='0';

}

function clearAll() {
    expression = '';
    document.getElementById('expr').innerText = expression;
    document.getElementById('result').innerText = '0';
}

function backspace() {
    
        expression = expression.slice(0, -1);        
        document.getElementById('expr').innerText = expression;
        // if(expression!='')
        // document.getElementById('result').innerText=eval(expression);
        // else
        // document.getElementById('result').innerText='0';

}

function evaluatee() {
    if(expression==''){
       document.getElementById('result').innerText='0';
    }
    else{
        try {
            const result = eval(expression);
            document.getElementById('result').innerText = result;
            document.getElementById('expr').innerText = '';

            expression=(eval(expression))+"";
            // console.log(typeof(expression));
        } catch (error) {
            document.getElementById('result').innerText = 'Error';
        }
    }
}

function togglesign() {
    if(expression[0]!='-' && expression[0]!='+'){
        expression = '-' + expression;
    }
    else if (expression[0]=='-') {
        expression=expression.slice(1);
        expression = '+' + expression;
    }
    else{
        expression=expression.slice(1);
        expression = '-' + expression;
    }
    document.getElementById('expr').innerText = expression;
    
}
