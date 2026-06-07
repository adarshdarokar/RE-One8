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





// const users = [
//     {
//         name: "sadie sink",
//         pic: "https://tse3.mm.bing.net/th/id/OIP.lWhElHevtIK-8vpAiTZ2tQHaEK?pid=Api&P=0&h=180",
//         bio: "red hair. deep thoughts. soft chaos ✨",
//     },

//     {
//         name: "finn wolfhard",
//         pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
//         bio: "music, mystery and upside down vibes 🎸",
//     },

//     {
//         name: "erica sinclair",
//         pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
//         bio: "you can't spell america without erica 😎",
//     },

//     {
//         name: "lucas sinclair",
//         pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
//         bio: "max level loyalty and basketball energy 🏀",
//     },

//     {
//         name: "steve harrington",
//         pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=800&auto=format&fit=crop",
//         bio: "babysitter by accident. legend by choice 😎",
//     },

//     {
//         name: "dustin henderson",
//         pic: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
//         bio: "science + chaos + friendship combo 🔥",
//     },

//     {
//         name: "mili brwon",
//         pic: "https://i.pinimg.com/originals/04/ee/c9/04eec90c9fc692c01fb2b67257b9cd73.jpg",
//         bio: "the upside down remembers everything 🕷",
//     },

//     {
//         name: "hopper",
//         pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
//         bio: "coffee, cops and protecting hawkins ☕",
//     },
// ];

// function showUsers(arr) {

//     const container = document.querySelector(".cards-container");

//     arr.forEach(function (user) {

//         // CARD
//         let card = document.createElement("div");
//         card.className = "card";

//         // IMAGE
//         let img = document.createElement("img");
//         img.src = user.pic;
//         img.className = "bg-img";

//         // OVERLAY
//         let overlay = document.createElement("div");
//         overlay.className = "overlay";

//         // CONTENT
//         let content = document.createElement("div");
//         content.className = "content";

//         // TITLE
//         let title = document.createElement("h2");
//         title.innerText = user.name;

//         // DESC
//         let desc = document.createElement("p");
//         desc.innerText = user.bio;

//         // BUTTON
//         let btn = document.createElement("button");
//         btn.className = "follow-btn";
//         btn.innerText = "Follow";

//         // APPEND
//         content.appendChild(title);
//         content.appendChild(desc);
//         content.appendChild(btn);

//         card.appendChild(img);
//         card.appendChild(overlay);
//         card.appendChild(content);

//         container.appendChild(card);

//     });

// }

// showUsers(users);


// let inp = document.querySelector(".inp");

// inp.addEventListener("input", function () {

//     let newUsers = users.filter((user) => {

//         return user.name
//             .toLowerCase()
//             .startsWith(inp.value.toLowerCase());

//     });

//     document.querySelector(".cards-container").innerHTML = "";

//     showUsers(newUsers);

// });

// searching cards //





// lexical scoping //


// let a = 12

// function abcd() {
//     console.log(a);
// }

// function defg() {
//     let a = 13
//     abcd()
// }
// defg()



// Closers //

// function abcd(){
//     let a = 12 
//     return function (){
//         console.log(a);

//     }
// } 
// abcd()


// closers example //

// function clickLimiter() {
//     let click = 0;
//     return function () {
//         if (click < 5) {
//             click++
//             console.log(`clicked:${click} times`);
//         } else {
//             console.error("Limite Exceeded, Try after some time");

//         }

//     }
// }


// let fnc = clickLimiter()
// fnc()
// fnc()
// fnc()
// fnc()
// fnc()


// this keyword /  //




// let obj = {
//     name: "sadie sink",
//     age: 23,
//     sayName: function () {
//         console.log(this);

//     }
// }
// obj.sayName()






// event handler //


// document.querySelector('h1').addEventListener("click", function () {
//     console.log((this.style.color = "red"));

// })




// oobj | "construtor" | //

// function CreateBiscuits (name,price,qnty,company,category){
//     this.name = "Parle-G";
//     this.price = 5;
//     this.qnty = 8;
//     this.company = "Parle"
//     this.category = "regular"
// }

// let biscuit1 = new CreateBiscuits("Oreo",10,5,"nothing","biscuts") 
// let biscuit2 = new CreateBiscuits("Parle",10,5,"nothing","biscuts") 






// oobj / prototype  //


// function CreateBiscuits(name, price, color, company) {
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.company = company;
// }
// CreateBiscuits.prototype.write = function (text) {
//     let h1 = document.createElement("h1")
//     h1.textContent = text
//     h1.style.color = this.color;

//     document.body.append(h1)
// }
// let biscuit1 = new CreateBiscuits("Oreo", 10, "black", "biscuts")
// let biscuit2 = new CreateBiscuits("Parle", 10, "red", "biscuts")






//     CLASSES     //

// class CreatePen {
//     constructor(name, company, price, color) {
//         this.name = name
//         this.company = company
//         this.price = price
//         this.color = color
//     }

//     erase() {
//         document.body.querySelectorAll("h1").forEach((elem) => {
//             if (elem.style.color === this.color) {
//                 elem.remove()
//             }
//         })
//     }

//     write(text) {
//         let h1 = document.createElement("h1")
//         h1.textContent = text;
//         h1.style.color = this.color;
//         document.body.appendChild(h1)
//     }
// }


// let p1 = new CreatePen("montex", "montex", 10, "blue")
// let p2 = new CreatePen("montex", "Flair", 5, "black")







//    Classes Part - 2   // extends and super //

// class User {
//     constructor(name, address, username, email) {
//         this.name = name;
//         this.address = address;
//         this.username = username;
//         this.email = email;
//         this.role = "user";
//     }


//  checkRole() {
//     console.log(`you are a ${this.role}`);
// }

//     write(text) {
//         let h1 = document.createElement("h1");
//         h1.textContent = `${this.name} : ${text}`;
//         document.body.appendChild(h1);
//     }
// }

// class Admin extends User {
//     constructor(name, address, username, email, role) {
//         super(name, address, username, email);
//         this.role = "admin";
//     }

//     remove() {
//         document.querySelectorAll("h1").forEach(function (elem) {
//             elem.remove();
//         });
//     }
// }

// let u1 = new User(
//     "sadie",
//     "america",
//     "sadiesink",
//     "sadie@gmail.com"
// );

// let u2 = new Admin(
//     "adarsh",
//     "america",
//     "sadiesink",
//     "sadie@gmail.com",
//     "max"
// );

// let u3 = new Admin(
//     "tanu",
//     "america",
//     "sadiesink",
//     "sadie@gmail.com",
//     "max"
// );



// classes part 2 ended  //










//      ASYNC - SYNC      //



