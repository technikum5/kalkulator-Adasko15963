function calculate(operation) {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    if (isNaN(n1) && isNaN(n2)){
        alert('Proszę wprowadzić prawidłowe liczby.');
        return;
    }
    switch (operation) {
        case "dod":
            result = n1+n2;
            
            break;
        case "ode":
            result = n1 -n2;
            break;
        case "pom":
            result = n1 * n2;
            break;
        case "pod":
            if(n2 == 0){
                alert('Nie można dzielić przez 0.');
                break;
            }else{
                result = n1 / n2;
                break;
            }
        }








        
    document.getElementById('result').textContent = result;
}