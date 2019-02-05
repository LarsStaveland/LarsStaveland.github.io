// @ts-check
function setup() {
    let btnStart = document.getElementById("start");
    let divSykkel = document.getElementById("sykkel");
    let divFramhjul = document.getElementById("framhjul");
    let divBakhjul = document.getElementById("bakhjul");
    let lyd = document.getElementById("lyd");
     
    btnStart.addEventListener("click", startAnimasjon);
     
    function startAnimasjon() {
    divSykkel.className = "start";
    divFramhjul.className = "start";
    divBakhjul.className = "start";
    lyd.play();
    }
    }