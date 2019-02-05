//@ts-check

  function setup() {
    let lyd = document.getElementById("lyd");
    let divAstro = document.getElementById("astro");
    divAstro.addEventListener("click", spill);
   
    function spill() {
      lyd.play();
    }
  }

  function setup() {
    let divVis = document.getElementById("vis");
    let fjesene = Array.from(document.querySelectorAll(".fjes"));
    fjesene.forEach( e => e.addEventListener("click", visFjes));
    
    function visFjes(e) {
      let t = e.target;
      let nr = Number(t.innerHTML);
      divVis.style.backgroundImage = `url("bilder/bilde${nr}.mp3")`;
      divVis.style.display = "block";
      setTimeout(() =>  divVis.style.display = "none", 2000);
    }
  }