// 
const today = new Date();
const thisYear = today.getFullYear();

// adding some elements into the footer tag
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML =  `Raul Guliyev ${thisYear}`;
footer.appendChild(copyright);


// Skills
skills = ['javaScript', 'HTML', 'CSS', 'Python', 'SQL', 'GIT', 'Django', 'DRF', 'FastAPI', 'Docker'];
const skillsSection = document.querySelector("#skills");
const skillList = skillsSection.querySelector("ul");
for(let i=0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.textContent = skills[i];
    skillList.appendChild(skill);
}

