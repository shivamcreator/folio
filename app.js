"use strict"
var skill = [{ skillName: "JavaScript", img: "https://user-images.githubusercontent.com/85919501/128709937-80b78fc4-841e-4bbc-8f4a-3f8592046c54.png?techName=undefined&projectsCount=10&experience=0.9", numberOfProjects: 2, experience: 1 },
    {
        skillName: "React", img: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png", numberOfProjects: 1, experience: 0.6 
    }, {
        skillName: "HTML", img: "https://user-images.githubusercontent.com/85919501/128709932-8d785243-3226-40fd-b492-f97401d9f458.png?techName=undefined&projectsCount=10&experience=0.9", numberOfProjects: 3, experience: 1
    }, {
        skillName: "React Bootstrap", img: "https://avatars.githubusercontent.com/u/6853419?s=200&v=4", numberOfProjects: 1, experience: 0.5 
    }, {
        skillName: "Bootstrap", img: "https://www.logo.wine/a/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.svg", numberOfProjects: 2, experience: 1
    }, {
        skillName: "Python", img: "http://clipart-library.com/images_k/python-logo-transparent/python-logo-transparent-15.png", numberOfProjects: 2, experience: 1
    }];
function gebid(id) {
    return document.getElementById(id);
}
function gecn(className) {
    return document.getElementsByClassName(className)[0];
}
function change() {
        var random = document.getElementsByClassName("random-box")[0].getElementsByClassName("move");
        var z = 1;
        var ul = document.getElementById("header-ul");
        var list = ul.getElementsByTagName("li")
        for (var j = 0; j < list.length; j++) {
            if (list[j].classList.contains("glow")) {
                z = j+1;
            }
        }
        for (var i = 0; i < random.length; i++) {
            var x = random[i].id;
            var ranTop = Math.floor(Math.random() *460);
            var ranLeft = Math.floor(Math.random() * 90);
            if (ranTop<250) {
                document.getElementById(x).style.top = ranTop+"%";
                document.getElementById(x).style.left = ranLeft+"%";
            }

    }
    }

function move(flag) {
    if (flag == true) {
        document.getElementById("ss").classList.add("change");
    }
    else {
        document.getElementById("ss").classList.remove("change");
    }
}
function changeCard(self, flag) {
    if (flag == true) {
        self.classList.add("move");
    }
    else {
        self.classList.remove("move");
    }
}
function dp() {
    var a = document.getElementById("op");
    var arr = a.getElementsByTagName("Section");
    var cur = document.getElementsByClassName("current")[0];
}
function calculateVisibilityForDiv(div) {
    var windowHeight = window.innerHeight;
    var divPosition = div.getBoundingClientRect().top;
    var result = ((windowHeight - divPosition) * 100) / windowHeight;
    return result;
}
function sp(){
    var current = "";
    var a = document.getElementById("op");
    var sections = a.getElementsByTagName("Section");
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    }
    var navLi = document.getElementsByTagName("nav");
    for (var j = 0; j < navLi.length; j++) {

        var li = navLi[j];
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    }
};
function changeHeader() {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
        var bounding = sections[i].getBoundingClientRect();
        if (window.innerHeight - 600 >= bounding.top) {
            var ul = document.getElementById("header-ul");
            var li = ul.getElementsByTagName("li")
            for (var j = 0; j < li.length; j++) {
                li[j].classList.remove("glow");
                if (li[j].classList.contains(sections[i].id)) {
                    li[j].classList.add("glow");
                }
            }
        }
    }
}
function changeScreen(self) {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove("active");
    }
    var section = self.parentElement.classList.item(0); 
    var sectionDiv = document.getElementById(section);
    window.scrollTo({
        top: sectionDiv.offsetTop - 150,
        behavior: 'smooth'
    });
    sectionDiv.classList.add("active");

}
function changeDescription(self) {
    document.getElementById("tech-stack").getElementsByClassName("active")[0].classList.remove("active");
    var target = document.getElementById("decription-box");
    var ind = self.dataset.index;
    var val = skill[ind];
    target.getElementsByTagName("img")[0].src = val.img;
    document.getElementById("count").innerText = val.numberOfProjects;
    document.getElementById("exp-count").innerText = val.experience + " yrs";
    document.getElementById("skillll").innerHTML = val.skillName;
    self.classList.add("active");
}
function changeHeading() {
    var a = "Shivam Goyal | Frontend Developer";
    if (document.title.length == a.length) {
        document.title = "Welcome";
    }
    else {
        document.title = a;
    }
}
setInterval(change, 1000);
setInterval(changeHeading, 3000);
window.addEventListener("scroll", changeHeader)
window.addEventListener(onscroll, sp);


function sendEmail() {
    var flag = true;
    var arr = document.getElementsByClassName("data");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].classList.contains("email")) {
            flag = validateEmail(arr[i].value);
        }
        else if (arr[i].classList.contains("number")) {
            flag = validateNumber(arr[i].value);
        }
        else if (arr[i].value.length == 0) {
            flag = false;
        }
    }
    if (flag == false) {
        alert("Please fill all details");
    }
    else {
        var btn = gebid("sendEmail-btn");
        setTimeout(function (text) {
            btn.innerText = "Submit";
        }, 3000);
        btn.innerText = "Sent";
    }
}
function hireMe() {
    gebid("contact").scrollIntoView({ behavior: "smooth"});
}
function downloadCV() {
    window.open("21117--ShivamGoyal.pdf");
}
function validateEmail(input) {
    var emailValidRegex = /^([a-zA-Z\d])([a-zA-Z\d\.]+([\-_+]{1})?)+@([a-zA-Z\d-]+)\.([a-z]{2,10})(\.[a-z]{2,10})?$/;
    if (input.match(emailValidRegex)) {
        return true;
    }
    return false;
}
function validateNumber(input) {
    var phoneValidRegex = /^((\+|(00))?91|0)?[6789]{1}\d{9}$/;
    if (input.match(phoneValidRegex)) {
        return true;
    }
    return false;
}
