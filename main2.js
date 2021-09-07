
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



 


    
