
// let tango = document.querySelector("#tango");
// window.addEventListener("mousemove", function (dets) {
//   tango.style.top = dets.clientY + "px";
//   tango.style.left = dets.clientX + "px";

// })

let ul = document.querySelector("ul")


ul.addEventListener("click",function(dets){
  dets.target.classList.toggle("lt")
})