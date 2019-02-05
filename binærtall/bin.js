// @ts-check

function setup() {
    let divRegister = document.getElementById("register");
    let divVerdi = document.getElementById("verdi");

    divRegister.addEventListener("click", beregn);

    function beregn(e) {
        let t = e.target;
        if (t.classList.contains("bit")) {
            t.classList.toggle("on");
        }
        let bits = Array.from(divRegister.querySelectorAll(".on"));
        let sum = bits.map(e => +e.dataset.tall).reduce((s,v) => s+v,0);
        divVerdi.innerHTML = String(sum);

        let allBits = Array.from(divRegister.querySelectorAll(".bit"));
        let hex1 = allBits.slice(-4)
        .filter(e => e.classList.contains("on"))
        .map(e => +e.dataset.tall).reduce((v,s) => v+s, 0);
    }

}
