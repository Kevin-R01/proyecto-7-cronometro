let hr = mn = sg = ms = "0" + 0, iniciartiempo;

const botoniniciar = document.querySelector(".iniciar");
const botondetener = document.querySelector(".detener");
const botonreiniciar = document.querySelector(".reiniciar");

botoniniciar.addEventListener("click", iniciar);
botondetener.addEventListener("click", detener);
botonreiniciar.addEventListener("click", reiniciar);

function iniciar(){
    botoniniciar.classList.add("on");
    iniciartiempo=setInterval(()=> {
        ms++;
        ms=ms < 10 ? "0"+ms:ms;
        if(ms==100){
            sg++;
            sg=sg < 10 ? "0"+sg:sg;
            ms= "0"+0;
        }
        if(sg==60){
            mn++;
            mn=mn < 10 ? "0"+mn:mn;
            sg="0"+0;

        }
        if(mn==60){
            hr++;
            hr=hr < 10 ? "0"+hr:hr;
            mn="0" +0;

        }
        ingresarValor();

    },10  );
}

function detener() {
    botoniniciar.classList.remove("on");
    clearInterval(iniciartiempo);

}

function reiniciar(){
    botoniniciar.classList.remove("on");
    clearInterval(iniciartiempo);
    hr = mn = sg = ms = "0" + 0;
    ingresarValor();
}

function ingresarValor(){
    document.querySelector('.milisegundo').innerHTML = ms;
    document.querySelector('.segundo').innerHTML = sg;
    document.querySelector('.minuto').innerHTML = mn;
    document.querySelector('.hora').innerHTML = hr;
}









