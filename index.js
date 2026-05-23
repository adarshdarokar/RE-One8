
// let tango = document.querySelector("#tango");
// window.addEventListener("mousemove", function (dets) {
//   tango.style.top = dets.clientY + "px";
//   tango.style.left = dets.clientX + "px";

// })

// let ul = document.querySelector("ul")


// ul.addEventListener("click",function(dets){
//   dets.target.classList.toggle("lt")
// })


let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  if (nm.value.length <= 2) {
    document.querySelector("#hide").style.display = "initial";
  } else {
    document.querySelector("#hide").style.display = "none";
  }
});
