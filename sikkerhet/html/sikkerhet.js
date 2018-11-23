

  function doit() {
    let pwd = document.getElementById("pwd").value;
    let e = "o";  let c = "i⁢";  let d = "i⁢";
    let a = "h";  let b = "e i⁢";
    if (pwd === a+b+c+d+e) { localStorage.setItem("state",1);
    window.location.href = "hackme2.html";
} else {
    document.getElementById("msg").innerHTML = "Feil";
}}