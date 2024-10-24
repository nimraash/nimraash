
// listing element 
 document.getElementById(`resumeForm`)?.addEventListener("submit" , function(event) { 
    event.preventDefault();

    //type assertion
 const nameElement = document.getElementById(`name`) as HTMLInputElement;
 const emailElement = document.getElementById(`email`) as HTMLInputElement;
 const phoneElement = document.getElementById(`phone`) as HTMLInputElement;
 const educationElement = document.getElementById(`education`) as HTMLInputElement;
 const experienceElement = document.getElementById(`experience`) as HTMLInputElement;
 const skillsElement= document.getElementById(`skills`) as HTMLInputElement;

if ( nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement ) {
    const name = nameElement.value;
    const Email = emailElement.value;
    const Phone = phoneElement.value;
    const Education = educationElement.value;
    const Experience = experienceElement.value;
    const Skills = skillsElement.value;

 
// create resume output
const resumeOutput = `
<h2>Resume</h2>           
<p><strong>Name:</strong> ${name} </p>
<p><strong>Email:</strong> ${Email} </p>
<p><strong>phone Number:</strong> ${Phone} </p>

<h3>Education</h3>
<p>${Education}</p>


<h3>Experience</h3>
<p>${Experience}</p>


<h3>Skills</h3>
<p>${Skills}</p>

`;

// Display the resume output 
const resumeOutputElement = document.getElementById(`resumeOutput`);
if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput   
} else {
    console.error('The resume output element are missing.')
}
} else {
    console.error(`one or more output elements are missing`)
}
 });







