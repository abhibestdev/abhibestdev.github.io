//https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("introForm");
    const addCourseButton = document.getElementById("addCourse");
    const coursesDiv = document.getElementById("courses");
    const introResultDiv = document.getElementById("introContent");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const formData = new FormData(form);

        var image = formData.get("image");
        const imageURL = URL.createObjectURL(image);
        var text = "<img src='" + imageURL + "'/>"

        const introHTML = `
            <h2>${formData.get("name")}: Introduction</h2>
            <figure>
            ${text}
            <figcaption>${formData.get("imageCaption")}</figcaption>
            </figure>
            <ul>
                <li><b>Mascot: </b> ${formData.get("mascot")}</li>
                <li><b>Personal Background: </b> ${formData.get("personalBackground")}</li>
                <li><b>Professional Background: </b> ${formData.get("professionalBackground")}</li>
                <li><b>Academic Background: </b> ${formData.get("academicBackground")}</li>
                <li><b>Background in this Subject: </b> ${formData.get("webDevelopmentBackground")}</li>
                <li><b>Primary Computer Platform: </b> ${formData.get("primaryPlatform")}</li>
                <li><b>Courses I'm in: </b> ${formData.get("primaryPlatform")}</li>
                <ul>
                    ${formData.getAll("course[]").map(course => `<li><b>${course}</b></li>`).join("")}
                </ul>
                <li><b>Funny Thing: </b> ${formData.get("funnyThing")}</li>
                <li><b>Anything Else: </b> ${formData.get("anythingElse")}</li>
                <li><b>I understand that what is on this page is not password protected, and I will not put anything here that I don’t want publicly available: </b>${formData.get("agree") ? "Yes" : "No"}</li>
            </ul>
        `;

        introResultDiv.innerHTML = introHTML;
    });

    form.addEventListener("reset", function () {
        introResultDiv.innerHTML = "";
    });

    addCourseButton.addEventListener("click", function () {
        const courseDiv = document.createElement("div");
        courseDiv.innerHTML = `
            <input type="text" name="course[]" required>
            <button type="button" class="deleteCourse">Delete</button>
        `;
        coursesDiv.appendChild(courseDiv);
    });

    coursesDiv.addEventListener("click", function (event) {
        if (event.target.classList.contains("deleteCourse")) {
            event.target.parentNode.remove();
        }
    });
});