
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
    "/Assets/Thumbnails/ProfilePic.jpg"
]
const changeProfilePicture = () => {
    let randomNumber = Math.floor(Math.random() * 8);
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
function getAge(dateString) {
    var today = new Date();
    var DOB = new Date(dateString);
    var totalMonths = (today.getFullYear() - DOB.getFullYear()) * 12 + today.getMonth() - DOB.getMonth();
    totalMonths += today.getDay() < DOB.getDay() ? -1 : 0;
    var years = today.getFullYear() - DOB.getFullYear();
    if (DOB.getMonth() > today.getMonth())
        years = years - 1;
    else if (DOB.getMonth() === today.getMonth())
        if (DOB.getDate() > today.getDate())
            years = years - 1;

    var days;
    var months;

    if (DOB.getDate() > today.getDate()) {
        months = (totalMonths % 12);
        if (months == 0)
            months = 11;
        var x = today.getMonth();
        switch (x) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12: {
                var a = DOB.getDate() - today.getDate();
                days = 31 - a;
                break;
            }
            default: {
                var a = DOB.getDate() - today.getDate();
                days = 30 - a;
                break;
            }
        }
    }
    else {
        days = today.getDate() - DOB.getDate();
        if (DOB.getMonth() === today.getMonth())
            months = (totalMonths % 12);
        else
            months = (totalMonths % 12) + 1;
    }
    var age = years + ' years, ' + months + ' months, and ' + days + ' days';
    return age;
}

document.getElementById("myAge").innerHTML = `I am ${getAge("1999/10/11")} old.`;

 


    
