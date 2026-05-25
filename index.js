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

// function setDarkorLight() {

//   // system dark mode check

//   const isDarkMode =
//     window.matchMedia("(prefers-color-scheme: dark)").matches;


//   // agar dark mode hai

//   if (isDarkMode) {

//     document.body.classList.remove("light");
//     document.body.classList.add("dark");

//   }

//   // agar light mode hai

//   else {

//     document.body.classList.remove("dark");
//     document.body.classList.add("light");

//   }

// }



// // ======================
// // APPLY SAVED THEME
// // ======================

// // localStorage se theme nikaalo

// const savedTheme = localStorage.getItem("theme");


// // agar theme saved hai

// if (savedTheme) {

//   // body me saved theme laga do

//   document.body.classList.add(savedTheme);

// }


// // warna system theme use karo

// else {

//   setDarkorLight();

// }



// // ======================
// // SYSTEM THEME LISTENER
// // ======================

// // OS theme change detect karega

// window
//   .matchMedia("(prefers-color-scheme: dark)")
//   .addEventListener("change", function () {


//     // sirf tab system theme apply karo
//     // jab user ne manually theme select na ki ho

//     if (!localStorage.getItem("theme")) {

//       setDarkorLight();

//     }

//   });



// // ======================
// // BUTTON
// // ======================

// const btn = document.querySelector("#toggleTheme");



// btn.addEventListener("click", function () {

//   // check karo dark laga hai kya

//   const isDark =
//     document.body.classList.contains("dark");



//   // DARK → LIGHT

//   if (isDark) {

//     document.body.classList.remove("dark");
//     document.body.classList.add("light");

//     localStorage.setItem("theme", "light");

//   }


//   // LIGHT → DARK

//   else {

//     document.body.classList.remove("light");
//     document.body.classList.add("dark");

//     localStorage.setItem("theme", "dark");

//   }

// });





const users = [
    {
        name: "amisha rathore",
        pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
        bio: "silent chaos in a loud world 🖤🕊 | not for everyone",
    },

    {
        name: "sadie sink",
        pic: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
        bio: "red hair. deep thoughts. soft chaos ✨",
    },

    {
        name: "emma stone",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bio: "living between coffee and late night vibes ☕",
    },

    {
        name: "jenna ortega",
        pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=800&auto=format&fit=crop",
        bio: "pretty eyes & dangerous mind 🕷",
    },

    {
        name: "anya taylor",
        pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
        bio: "made of cinema, mystery and midnight energy 🌙",
    },

    {
        name: "alex rivera",
        pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
        bio: "lost in music, found in dreams 🎧",
    },

    {
        name: "sophia lee",
        pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
        bio: "collecting memories like polaroids 📸",
    },

    {
        name: "noah walker",
        pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=800&auto=format&fit=crop",
        bio: "half human half overthinking machine ⚡",
    },
];

function showUsers(arr) {

    const container = document.querySelector(".cards-container");

    arr.forEach(function (user) {

        // CARD
        let card = document.createElement("div");
        card.className = "card";

        // IMAGE
        let img = document.createElement("img");
        img.src = user.pic;
        img.className = "bg-img";

        // OVERLAY
        let overlay = document.createElement("div");
        overlay.className = "overlay";

        // CONTENT
        let content = document.createElement("div");
        content.className = "content";

        // TITLE
        let title = document.createElement("h2");
        title.innerText = user.name;

        // DESC
        let desc = document.createElement("p");
        desc.innerText = user.bio;

        // BUTTON
        let btn = document.createElement("button");
        btn.className = "follow-btn";
        btn.innerText = "Follow";

        // APPEND
        content.appendChild(title);
        content.appendChild(desc);
        content.appendChild(btn);

        card.appendChild(img);
        card.appendChild(overlay);
        card.appendChild(content);

        container.appendChild(card);

    });

}

showUsers(users);


let inp = document.querySelector(".inp")
inp.addEventListener("input", function () {
    let newUsers = users.filter((user) => {
        return user.name.startsWith(inp.value)
    })
    document.querySelector(".card").innerHTML = "";
    showUsers(newUsers)
})