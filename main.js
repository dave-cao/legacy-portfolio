//Stop users from sending an empty form
let errorMessageContainer = document.querySelector(".errorMessage");
let errorMessage = document.createElement("h4");
const validateForm = () => {
  let userName = document.forms["myForm"]["user_name"].value;
  let userEmail = document.forms["myForm"]["user_email"].value;
  let userComments = document.forms["myForm"]["user_comments"].value;

  let errorIncrement = 0;
  errorMessageContainer.style.display = "block";
  //helper function for animation
  const errorFunction = () => {
    errorMessageContainer.appendChild(errorMessage);
    errorMessageContainer.style.opacity = "0";
    errorIncrement++;
    let frameRate;
    let fade = 0;
    let position = 0;
    clearInterval(frameRate);
    id = setInterval(frame, 1);
    function frame() {
      if (fade === 1) {
        clearInterval(frameRate);
      } else {
        position++;
        errorMessageContainer.style.left = position + "px";
        fade += 0.01;
        errorMessageContainer.style.opacity = fade;
      }
    }
  };

  if (userName == "") {
    errorMessage.innerHTML =
      "Please fill in your name so I know who to refer you as!";
    errorFunction();
    return false;
  } else if (userEmail == "") {
    errorMessage.innerHTML = "I need to know your email to contact you back!";
    errorFunction();
    return false;
  } else if (userComments == "") {
    errorMessage.innerHTML =
      "Leave a comment so I can understand why you're contacting me! :)";
    errorFunction();
    return false;
  }
};

const thankYouForm = (event) => {
  let fullFormContainer = document.querySelector("#contactMe");
  let formContainer = document.querySelector(".formContainer");
  let contactTitle = document.querySelector("#contactMeTitle");
  let thankParagraph = document.createElement("p");
  formContainer.style.display = "none";
  contactTitle.innerHTML = "Thank you for reaching out!";
  thankParagraph.textContent = "I will get back to you as soon as I can.";
  fullFormContainer.appendChild(thankParagraph);

  fullFormContainer.style.height = "40vh";
  fullFormContainer.style.display = "flex";
  fullFormContainer.style.flexDirection = "column";
  fullFormContainer.style.alignItems = "center";
  fullFormContainer.style.justifyContent = "center";
  fullFormContainer.style.fontSize = "1.4em";
  console.log(thankParagraph);
};

//responsive gallery when profile picture is clicked
const photoGallery = [
  "/Assets/PhotoGallery/fundraiserWithFriends.jpg",
  "/Assets/PhotoGallery/posingMexico.jpg",
  "/Assets/PhotoGallery/teletonRehab.jpg",
  "/Assets/PhotoGallery/skyDiving.jpg",
  "/Assets/PhotoGallery/bigWorld.jpg",
  "/Assets/PhotoGallery/withAngels.jpg",
  "/Assets/PhotoGallery/walkWithFriend.jpg",
  "/Assets/PhotoGallery/raining.jpg",
  "/Assets/PhotoGallery/teddyBear.jpg",
  "/Assets/PhotoGallery/drinkMug.jpg",
  "/Assets/Thumbnails/ProfilePic.jpg",
];
let galleryIncrement = 0;
const changeProfilePicture = () => {
  if (galleryIncrement === photoGallery.length) {
    galleryIncrement = 0;
  }
  document.querySelector("#profilePicture").src =
    photoGallery[galleryIncrement];
  galleryIncrement++;
};

//naruto run when kinesiology is clicked
const runAnimation = () => {
  let id;
  let pos = 0;
  let runAnimation = document.getElementById("runAnimation");
  runAnimation.style.display = "block";
  clearInterval(id);
  let frame = () => {
    if (pos == 120) {
      clearInterval(id);
      runAnimation.style.display = "none";
    } else {
      pos++;
      runAnimation.style.left = pos + "%";
    }
  };
  id = setInterval(frame, 20);
};

//this ain't my code, when I have the time, I should figure this out.
function getAge(dateString, dateType) {
  /*
       function getAge
       parameters: dateString dateType
       returns: boolean
    
       dateString is a date passed as a string in the following
       formats:
    
       type 1 : 19970529
       type 2 : 970529
       type 3 : 29/05/1997
       type 4 : 29/05/97
    
       dateType is a numeric integer from 1 to 4, representing
       the type of dateString passed, as defined above.
    
       Returns string containing the age in years, months and days
       in the format yyy years mm months dd days.
       Returns empty string if dateType is not one of the expected
       values.
    */

  var now = new Date();
  var today = new Date(now.getYear(), now.getMonth(), now.getDate());

  var yearNow = now.getYear();
  var monthNow = now.getMonth();
  var dateNow = now.getDate();

  if (dateType == 1)
    var dob = new Date(
      dateString.substring(0, 4),
      dateString.substring(4, 6) - 1,
      dateString.substring(6, 8)
    );
  else if (dateType == 2)
    var dob = new Date(
      dateString.substring(0, 2),
      dateString.substring(2, 4) - 1,
      dateString.substring(4, 6)
    );
  else if (dateType == 3)
    var dob = new Date(
      dateString.substring(6, 10),
      dateString.substring(3, 5) - 1,
      dateString.substring(0, 2)
    );
  else if (dateType == 4)
    var dob = new Date(
      dateString.substring(6, 8),
      dateString.substring(3, 5) - 1,
      dateString.substring(0, 2)
    );
  else return "";

  var yearDob = dob.getYear();
  var monthDob = dob.getMonth();
  var dateDob = dob.getDate();

  yearAge = yearNow - yearDob;

  if (monthNow >= monthDob) var monthAge = monthNow - monthDob;
  else {
    yearAge--;
    var monthAge = 12 + monthNow - monthDob;
  }

  if (dateNow >= dateDob) var dateAge = dateNow - dateDob;
  else {
    monthAge--;
    var dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  return yearAge + " years, " + monthAge + " months, and " + dateAge + " days";
}

document.getElementById("myAge").innerHTML = `I am ${getAge(
  "11/10/1999",
  3
)} old.`;

//YOU WILL HAVE THIS HERE UNTIL YOU FKING FIGURE OUT HOW TO DO THIS SHIT YOURSELF!!!
const creditForDateScript = () => {
  alert(
    "The credit for this date script goes to Martin Webb at https://www.irt.org/script/29.htm. A new tab will open directing you to the source code."
  );
};

//test to see and changes styles if on IOS or Ipad. IOS only works on phone whereas iPad works on phone and Ipad. I will leave both there in case something becasue deprecated
let IOS = /iPad|iPhone|iPod/i.test(navigator.userAgent) && !window.MSStream;
const iPad = !!(
  navigator.userAgent.match(/iPad|iPhone|iPod/i) ||
  (navigator.platform === "MacIntel" &&
    typeof navigator.standalone !== "undefined")
);
const firstPageBackgroundImage = document.getElementById("firstPageBackground");
const myProjectsBackground = document.querySelector(".projectsPage");

if (IOS || iPad) {
  firstPageBackgroundImage.style.position = "absolute";
  firstPageBackgroundImage.style.backgroundAttachment = "scroll";
  myProjectsBackground.style.background = "#232831";
}

//Have some fun clicking my Name!

const myName = document.querySelector(".name");

const yourNameArray = [
  "Loser",
  "Dork",
  "Geek",
  "Bum",
  "Shipwreck",
  "Failure",
  "Let-Down",
];
let yourName = yourNameArray[Math.floor(Math.random() * 7)];

const clickNameArray = [
  "Hey there!",
  "Why are you clicking on my name?",
  "kinda rude...",
  "uhmmm, okay?",
  "seriously, what do you want?",
  "Do you have nothing better to do?",
  "okay, your a determined one huh?",
  "Maybe you think you'll get nudes from this?",
  "Yea thats not happening",
  "Once upon a time",
  "There was a kid named...",
  "hey whats your name?",
  `So your name is ${yourName}?`,
  "...",
  "It's okay, we don't get to choose our names",
  `Alright ${yourName}!`,
  `${yourName}...`,
  "hehe...",
  "okay, sorry",
  "Now where was I...",
  "Right.",
  `There was a kid named ${yourName}`,
  `${yourName} went on an adventure to see the world`,
  "So they travelled to a forest.",
  "But right when they got there...",
  "...",
  "......",
  "............",
  "Sorry this was for suspense",
  "But right when they got there!",
  "They were eaten by a lion shark dolphin and died.",
  "...",
  ".....",
  ".........",
  ".............",
  ".......................",
  "....................................................................................................................",
  "OKAY WHAT MORE DO YOU WANT?",
  "You didn't like the story?",
  `Well too bad`,
  `Just like you didn't get to choose your name`,
  "You don't get to choose what story is told",
  "DAM YOUR STILL CLICKING?",
  ".....",
  "....",
  "...",
  "..",
  ".",
  "Alright, your one persistant bastard",
  "YOU WILL RUE THE DAY YOU MESSED WITH ME",
  "MARK MY WORDS MORTAL",
  "yo",
  "Don't make me read you a bed time story",
  "go to sleep man",
  "Are you really wasting your time clicking on my name?",
  "lalalalal",
  "la dee dum, laa dee dum.",
  "fine",
  "you want something?",
  "I'll give you a secret link",
  "That way you'll be off my back right?",
  "alright...",
  "the secret link is...",
  "okay...",
  "the secret...",
  "...",
  ".....",
  "the secret.....!!!",
  "!!!!!!",
  "!!!!!!!!!!!",
  "AHHHHHH",
  "AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
  "AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
  "UNLIMITED POWER",
  "AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
  "LETS GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
  "AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
];

let increment = 0;
function clickMyName() {
  if (increment === 12) {
    const yourRealName = prompt("Please input your name");
  }
  if (increment === clickNameArray.length) {
    alert(
      `Hey ${yourName}, it looks like you broke the name...Did you really click it that many times?`
    );
  }

  if (increment === clickNameArray.length) {
    myName.innerHTML = "Broken";
    return;
  } else {
    myName.innerHTML = clickNameArray[increment];
    increment++;
  }
}

//Simple button click counter

let counter = 0;
const buttonClickerContainer = document.getElementById("buttonClicker");
const contactButton = document.createElement("button");
contactButton.innerHTML = "Counter!";
contactButton.setAttribute("id", "counterButton");

function createButton() {
  const counterButton = document.getElementById("counterButton");
  counterButton.style.display = "block";
  buttonClickerContainer.style.display = "flex";
}

//prizes
const autoButton = document.getElementById("autoButton");
const prizeContainer = document.getElementById("prize");
let prizeLink = document.createElement("a");
prizeLink.innerHTML = "My Study Group Discord Server";
prizeLink.setAttribute("href", "https://discord.gg/vh6BNFhb");
prizeLink.setAttribute("target", "_blank");
let autoClickIncrement = 0;
const clickCounter = () => {
  //100, 200, 300, 500, 1000, 1500, 2000, 3000, 3500, 5000, 8000, 10000, 20000
  switch (counter) {
    case 100:
      prizeContainer.innerHTML =
        "You know theres absolutely no reward for this right?";
      break;
    case 200:
      prizeContainer.innerHTML = "Interesting...";
      break;
    case 300:
      prizeContainer.innerHTML = "Woah...that's 300";
      break;
    case 500:
      let id;
      let pos = 0;
      let rewardAnimation = document.getElementById("rewardAnimation");
      let rewardContainer = document.getElementById("rewardContainer");
      rewardContainer.style.display = "block";
      rewardAnimation.style.display = "block";
      clearInterval(id);
      let frame = () => {
        if (pos == 120) {
          clearInterval(id);
          rewardAnimation.style.display = "none";
          rewardContainer.style.display = "none";
        } else {
          pos++;
          rewardAnimation.style.left = pos + "%";
        }
      };
      id = setInterval(frame, 20);
      prizeContainer.innerHTML = "WOWZERS YOU GANSTA";
      break;
    case 1000:
      prizeContainer.innerHTML =
        "Hey, if your willing to click this many times, that means you can fill out the form and send me a message right?";
      break;
    case 1500:
      prizeContainer.innerHTML = "You're an absolute stud";
      break;
    case 2000:
      prizeContainer.innerHTML =
        "Congratz! You have gained absolutely nothing!";
      break;
    case 3000:
      prizeContainer.innerHTML = "";
      prizeContainer.appendChild(prizeLink);
      break;
    case 3500:
      prizeContainer.removeChild(prizeLink);
      break;
    case 5000:
      prizeContainer.innerHTML = "There's nothing after this, you should stop";
      break;
    case 6000:
      prizeContainer.innerHTML =
        "Type 'IM A LOSER' in the comments, submit, and I'll make something special for you :)";
    case 8000:
      prizeContainer.innerHTML = "I'm serious, theres nothing after this.";
      break;
    case 10000:
      prizeContainer.innerHTML = "You need help.";
      break;
    case 20000:
      prizeContainer.innerHTML = "Alright, you just left it on didn't you.";
      break;
  }
  //so that auto-click button doesn't show up after second time
  if (counter === 700 && autoClickIncrement === 0) {
    autoButton.style.display = "block";
    prizeContainer.innerHTML = "Lose 600 clicks to gain an auto-clicker!";
    autoClickIncrement++;
  }
  if (counter === 1400 && autoClickIncrement === 1) {
    autoButton.style.display = "block";
    prizeContainer.innerHTML =
      "Lose another 600 clicks to get auto-clicker X2!!";
    autoClickIncrement++;
  }
  contactMeTitle.innerHTML = counter;
  counter++;
};
//autoClickerFunction
const autoClicker = () => {
  autoButton.style.display = "none";
  counter -= 600;
  function timeFunction() {
    clickCounter();
  }
  let myInterval = setInterval(timeFunction, 300);
};

//last easter egg

const simpleAlert = () => {
  alert(
    "Hey, hey hey, why are randomly clicking on this page? Anyway, since you clicked on this word, that means you're a little bit into coding. If you want to learn, you should check out freeCodeCamp!"
  );
};

//nav bar animation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav_links_container");
const aboutMeLink = document.querySelector(".aboutMeLink");
const myProjectsLink = document.querySelector(".myProjectsLink");
const contactMeLink = document.querySelector(".contactMeLink");
const navBar = document.querySelector(".navBar");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navBar.classList.toggle("under");
});

aboutMeLink.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navBar.classList.toggle("under");
});
myProjectsLink.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navBar.classList.toggle("under");
});
contactMeLink.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navBar.classList.toggle("under");
});
