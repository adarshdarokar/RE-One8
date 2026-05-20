// let btn = document.querySelector("#btn");
// let fileinp = document.querySelector("#fileinp");

// btn.addEventListener("click", function () {
//   fileinp.click();
// });

// fileinp.addEventListener("change", function (dets) {
//  const file = dets.target.files[0];
//  if(file){
//     btn.textContent = file.name;
//  }
// });

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("profile");
});
