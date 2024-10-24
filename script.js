var _a;
// listing element 
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    //type assertion
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var Email = emailElement.value;
        var Phone = phoneElement.value;
        var Education = educationElement.value;
        var Experience = experienceElement.value;
        var Skills = skillsElement.value;
        // create resume output
        var resumeOutput = "\n<h2>Resume</h2>           \n<p><strong>Name:</strong> ".concat(name_1, " </p>\n<p><strong>Email:</strong> ").concat(Email, " </p>\n<p><strong>phone Number:</strong> ").concat(Phone, " </p>\n\n<h3>Education</h3>\n<p>").concat(Education, "</p>\n\n\n<h3>Experience</h3>\n<p>").concat(Experience, "</p>\n\n\n<h3>Skills</h3>\n<p>").concat(Skills, "</p>\n\n");
        // Display the resume output 
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element are missing.');
        }
    }
    else {
        console.error("one or more output elements are missing");
    }
});
