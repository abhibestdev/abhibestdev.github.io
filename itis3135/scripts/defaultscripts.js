function displayTimeAndDate() {
    const currentDate = new Date();
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const timeString = currentDate.toLocaleTimeString();
    const dateString = currentDate.toLocaleDateString();
    const dayOfWeekString = dayOfWeek[currentDate.getDay()];
    if (document.getElementById("current-time") != null) {
    document.getElementById("current-time").textContent = `Today is ${timeString} on ${dayOfWeekString}, ${dateString}`;
    }
}

function greetUser() {
    const name = document.getElementById("name").value;
    const mood = document.getElementById("mood").value;
    document.getElementById("greeting").textContent = `The Angry Kangaroo welcomes you, ${name}! We're glad you are feeling ${mood}!`;
}

function getPolygonName() {
    const number = Math.abs(Math.round(parseFloat(document.getElementById("favorite-number").value)));
    const polygons = ["", "digon", "triangle", "quadrilateral", "pentagon", "hexagon", "heptagon", "octagon", "enneagon", "decagon"];
    const polygonName = polygons[number - 1] || "undefined";
    document.getElementById("polygon-result").textContent = `The polygon with ${number} sides is called a ${polygonName}.`;
}

function saveAKangaroo() {
    window.alert("You just saved an Angry Kangaroo from being put down.");
}

function showMeAKangaroo() {
    document.getElementById("kangaroo-image").style.visibility = "visible";
}

function hideTheKangaroo() {
    document.getElementById("kangaroo-image").style.visibility = "hidden";
}

function whatIsAKangaroo() {
    window.alert("A Kangaroo");
}

function whatTimeIsItInKangarooLand() {
    window.alert("Kangaroo Time");
}

window.onload = displayTimeAndDate;

//Load header
document.getElementById("default-header").innerHTML = 
"<div class='navbar'>"
   + "<a href='index.html'>Home</a>"
   + "<a href='introduction.html'>Introduction</a>"
   + "<a href='contract.html'>Contract</a>"
   + "<a href='tables.html'>Tables</a>"
   + "<a href='forms.html'>Forms</a>"
   + "<a href='website_evaluations.html'>Website Evaluations</a>"
   + "<a href='firstscripts.html'>First Scripts</a>"
   + "<a href='https://webpages.charlotte.edu/akoukunt'>Back to Main Site</a>"
+ "</div>"
+ "<div class='secondary-navbar'>"
+    "<a href='balls\Ba11$ 101.htm'>Crappy Webpage</a>"

//Load footer
document.getElementById("default-footer").innerHTML = 
"<div>"
       +         "<a href='https://webpages.charlotte.edu/akoukunt/'>CLT Page</a>"
                + "||"
                + "<a href='https://github.com/abhibestdev/'>GitHub</a>"
                + "||"
                + "<a href='https://abhibestdev.github.io/'>GitHub.io</a>"
                + "||"
                + "<a href='https://abhibestdev.github.io/itis3135/'>ITIS 3135 Page</a>"
                + "||"
                + "<a href='https://www.freecodecamp.org/fcc706a2c40-cc81-4c39-9af7-8afff4b47a25'>freeCodeCamp</a>"
                + "||"
                + "<a href='https://www.codecademy.com/profiles/tera6824857383'>Codeacademy</a>"
                + "||"
                + "<a href='https://www.linkedin.com/in/abhinav-koukuntla-5454b523a/'>LinkedIn</a>"
            + "</div>"
            + "<div class='signature'>"
            +    "<p>Page built by <a href='abhinavsangrykangaroo.com/index.html'>Angry Kangaroo</a> © 2023</p>"
            + "</div>"
            + "<a href='https://validator.w3.org/check?uri=referer'>"
                + "<img style='border:0;width:88px;height:31px' src='https://upload.wikimedia.org/wikipedia/commons/b/bb/W3C_HTML5_certified.png' alt='Valid HTML!'></a>"
                + "<a href='https://jigsaw.w3.org/css-validator/check/referer'>"
                + "<img style='border:0;width:88px;height:31px' src='https://jigsaw.w3.org/css-validator/images/vcss' alt='Valid CSS!'>"
            + "</a>"