
//Stop users from sending an empty form
const validateForm = () => {
    let userName = document.forms["myForm"]["user_name"].value;
    let userEmail = document.forms["myForm"]["user_email"].value;
    let userComments = document.forms["myForm"]["user_comments"].value;
    if (userName == "") {
        alert ("Hey! I need to know your name to know what to refer you as!");
        return false;
    } else if (userEmail == "") {
        alert ("I need to know your email to contact you back!")
        return false;
    } else if (userComments == "") {
        alert ("Leave a comment so I can understand why you're contacting me! :)")
        return false;
    }
}

//responsive gallery when profile picture is clicked
const photoGallery = [
    "/Assets/PhotoGallery/drinkMug.jpg",
    "/Assets/PhotoGallery/fundraiserWithFriends.jpg",
    "/Assets/PhotoGallery/hairCut.jpg",
    "/Assets/PhotoGallery/raining.jpg",
    "/Assets/PhotoGallery/skyDiving.jpg",
    "/Assets/PhotoGallery/teletonRehab.jpg",
    "/Assets/PhotoGallery/walkWithFriend.jpg",
    "/Assets/Thumbnails/ProfilePic.jpg",
    "/Assets/PhotoGallery/bigWorld.jpg",
    "/Assets/PhotoGallery/withAngels.jpg",
    "/Assets/PhotoGallery/teddyBear.jpg",
    "/Assets/PhotoGallery/posingMexico.jpg"
]
const changeProfilePicture = () => {
    let randomNumber = Math.floor(Math.random() * 12);
    console.log(randomNumber);
    document.querySelector("#profilePicture").src = photoGallery[randomNumber];
}

//naruto run when kinesiology is clicked
const runAnimation = () => {
    let id;
    let pos = 0;
    let runAnimation = document.getElementById("runAnimation");
    runAnimation.style.display = "block"
    clearInterval(id);
    let frame = () => {
        if (pos == 120) {
            clearInterval(id);
            runAnimation.style.display = "none";
        }
        else {
            pos++;
            runAnimation.style.left = pos + "%";
        }
    }
    id = setInterval(frame, 20);
}


//this ain't my code, when I have the time, I should figure this out.
function getAge(dateString,dateType) {
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
        var today = new Date(now.getYear(),now.getMonth(),now.getDate());
    
        var yearNow = now.getYear();
        var monthNow = now.getMonth();
        var dateNow = now.getDate();
    
        if (dateType == 1)
            var dob = new Date(dateString.substring(0,4),
                                dateString.substring(4,6)-1,
                                dateString.substring(6,8));
        else if (dateType == 2)
            var dob = new Date(dateString.substring(0,2),
                                dateString.substring(2,4)-1,
                                dateString.substring(4,6));
        else if (dateType == 3)
            var dob = new Date(dateString.substring(6,10),
                                dateString.substring(3,5)-1,
                                dateString.substring(0,2));
        else if (dateType == 4)
            var dob = new Date(dateString.substring(6,8),
                                dateString.substring(3,5)-1,
                                dateString.substring(0,2));
        else
            return '';
    
        var yearDob = dob.getYear();
        var monthDob = dob.getMonth();
        var dateDob = dob.getDate();
    
        yearAge = yearNow - yearDob;
    
        if (monthNow >= monthDob)
            var monthAge = monthNow - monthDob;
        else {
            yearAge--;
            var monthAge = 12 + monthNow -monthDob;
        }
    
        if (dateNow >= dateDob)
            var dateAge = dateNow - dateDob;
        else {
            monthAge--;
            var dateAge = 31 + dateNow - dateDob;
    
            if (monthAge < 0) {
                monthAge = 11;
                yearAge--;
            }
        }
    
        return yearAge + ' years, ' + monthAge + ' months, and ' + dateAge + ' days';
    }

document.getElementById("myAge").innerHTML = `I am ${getAge("11/10/1999", 3)} old.`;

//YOU WILL HAVE THIS HERE UNTIL YOU FKING FIGURE OUT HOW TO DO THIS SHIT YOURSELF!!! 
const creditForDateScript = () => {
    alert("The credit for this date script goes to Martin Webb at https://www.irt.org/script/29.htm. A new tab will open directing you to the source code.")
}


//test to see and changes styles if on IOS or Ipad. IOS only works on phone whereas iPad works on phone and Ipad. I will leave both there in case something becasue deprecated
let IOS = /iPad|iPhone|iPod/i.test(navigator.userAgent) && !window.MSStream;
const iPad = !!(navigator.userAgent.match(/iPad|iPhone|iPod/i) || (navigator.platform === "MacIntel" && typeof navigator.standalone !== "undefined"))
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
    "Let-Down"
]
let yourName = yourNameArray[Math.floor(Math.random()*7)];

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
    'lalalalal',
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
]

let increment = 0;
function clickMyName() {
    if (increment === 12) {
        const yourRealName = prompt("Please input your name");
    } 
    if (increment === clickNameArray.length) {
        alert(`Hey ${yourName}, it looks like you broke the name...Did you really click it that many times?`)
        
    }
   
    if (increment === clickNameArray.length) {
        myName.innerHTML = "Broken";
        return;
    } else {
        myName.innerHTML = clickNameArray[increment]
        increment++;
    }
    
}

//Simple button click counter

let counter = 0;

const createButton = () => {
    const contactMeTitle = document.getElementById("contactMeTitle");
    const buttonClickerContainer = document.getElementById("buttonClicker")
    const contactButton = document.createElement("button")
    if (counter === 1) return;
    counter++
    contactButton.innerHTML = "Counter!";
    buttonClickerContainer.appendChild(contactButton);
}

//prizes
const prizeContainer = document.getElementById("prize");
let prizeLink = document.createElement("a")
prizeLink.innerHTML = ("My Study Group Discord Server");
prizeLink.setAttribute("href", "https://discord.gg/vh6BNFhb")
prizeLink.setAttribute("target", "_blank")
const clickCounter = () => {
    
    if (counter === 100) {
        prizeContainer.innerHTML = "You know theres absolutely no reward for this right?"
    }
    if (counter === 300) {
        prizeContainer.innerHTML = "Woah...that's 300"
    }
    if (counter === 500) {
        
        let id;
        let pos = 0;
        let rewardAnimation = document.getElementById("rewardAnimation");
        let rewardContainer = document.getElementById("rewardContainer");
        rewardContainer.style.display = "block"
        rewardAnimation.style.display = "block"
        clearInterval(id);
        let frame = () => {
            if (pos == 120) {
                clearInterval(id);
                rewardAnimation.style.display = "none";
                rewardContainer.style.display = "none";
            }
            else {
                 pos++;
                rewardAnimation.style.left = pos + "%";
            }
        }
        id = setInterval(frame, 20);
        prizeContainer.innerHTML = "WOWZERS YOU GANSTA"
        
    }
    if (counter === 1000) {
        prizeContainer.innerHTML = "Hey, if your willing to click this many times, that means you can fill out the form and send me a message right?"
    }
    if (counter === 1500) {
        prizeContainer.innerHTML = "You're an absolute stud"
    }
    if (counter === 2000) {
        alert("Congratz! You have gained absolutely nothing!")
    }
    if (counter === 3000) {
        prizeContainer.appendChild(prizeLink);
    }
    if (counter === 3010) {
        prizeContainer.removeChild(prizeLink)
    }
    if (counter === 5000) {
        prizeContainer.innerHTML = "There's nothing after this, you should stop"
    }
    if (counter === 8000) {
        prizeContainer.innerHTML = "I'm serious, theres nothing after this."
    }
    if (counter === 10000) {
        alert("You need help.")
        prizeContainer.innerHTML = "You need help."
    }
    contactMeTitle.innerHTML = counter;
    counter++;
    
}


 
    
