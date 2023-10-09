        function displayTimeAndDate() {
            const currentDate = new Date();
            const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const timeString = currentDate.toLocaleTimeString();
            const dateString = currentDate.toLocaleDateString();
            const dayOfWeekString = dayOfWeek[currentDate.getDay()];
            document.getElementById("current-time").textContent = `Today is ${timeString} on ${dayOfWeekString}, ${dateString}`;
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