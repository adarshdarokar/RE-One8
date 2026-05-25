// localStorage.setItem("name", "sadiesink")

// save karna value //

// let val = localStorage.getItem("name", "sadiesink")

// value nikalna//

// localStorage.removeItem("name", "sadiesink")

// value ko remove karna //

// local,session storage done and dusted //

// let val = JSON.parse(localStorage.getItem('closeFriends'))
// console.log(val);

//  json.stringify  //

// ======================
// SYSTEM THEME FUNCTION
// ======================

function setDarkorLight() {

  // system dark mode check

  const isDarkMode =
    window.matchMedia("(prefers-color-scheme: dark)").matches;


  // agar dark mode hai

  if (isDarkMode) {

    document.body.classList.remove("light");
    document.body.classList.add("dark");

  }

  // agar light mode hai

  else {

    document.body.classList.remove("dark");
    document.body.classList.add("light");

  }

}



// ======================
// APPLY SAVED THEME
// ======================

// localStorage se theme nikaalo

const savedTheme = localStorage.getItem("theme");


// agar theme saved hai

if (savedTheme) {

  // body me saved theme laga do

  document.body.classList.add(savedTheme);

}


// warna system theme use karo

else {

  setDarkorLight();

}



// ======================
// SYSTEM THEME LISTENER
// ======================

// OS theme change detect karega

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", function () {


    // sirf tab system theme apply karo
    // jab user ne manually theme select na ki ho

    if (!localStorage.getItem("theme")) {

      setDarkorLight();

    }

  });



// ======================
// BUTTON
// ======================

const btn = document.querySelector("#toggleTheme");



btn.addEventListener("click", function () {

  // check karo dark laga hai kya

  const isDark =
    document.body.classList.contains("dark");



  // DARK → LIGHT

  if (isDark) {

    document.body.classList.remove("dark");
    document.body.classList.add("light");

    localStorage.setItem("theme", "light");

  }


  // LIGHT → DARK

  else {

    document.body.classList.remove("light");
    document.body.classList.add("dark");

    localStorage.setItem("theme", "dark");

  }

});