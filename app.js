let a = 0;

function test(){
    if(a < 10){
        a++;
        document.body.appendChild(document.createElement('div')).innerHTML = "La variable vaut : " + a;
        test();
    }
}
test();