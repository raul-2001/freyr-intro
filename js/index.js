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



// Message form submit
const meessageFrom = document.querySelector("form[name='leave_message']");

meessageFrom.addEventListener('submit', event =>{
    
    event.preventDefault();

    //current time
    const now_date = new Date();
    const userName = event.target.userName.value;
    const userEmail = event.target.userEmail.value;
    const usersMessage = event.target.userMessage.value; 

    console.log(userName);
    console.log(userEmail);
    console.log(usersMessage);

    
    meessageFrom.reset();

    // create message 
    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<div>
    <span>${usersMessage}</span>
    <p>${now_date.toLocaleString()} from <a class"link" href="mailto:${userEmail}">${userName}</a> &nbsp;</p>
    </div>`;
    
    if (messageSection.style.display === 'none') {
        messageSection.style.display = 'block';
    }

    // create edit button
    const edit_button = document.createElement("button");
    edit_button.innerText = "edit";
    edit_button.type = "button";
    edit_button.addEventListener('click', e =>{
        const entry_edit = e.target;
        const list_edit = entry_edit.parentNode;

        if (entry_edit.innerText === "edit") {
            const message = list_edit.querySelector('span');
            const input = document.createElement('input');
            input.type = 'text';
            input.value = message.innerText;

            message.after(input);
            message.remove();

            entry_edit.innerText = 'save';
        } else {
            const input = list_edit.querySelector('input');
            const message = document.createElement('span');
            message.innerText = input.value;
            
            input.after(message);
            input.remove();

            entry_edit.innerText = 'edit';
        }
    })

    // create remove button
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener('click', e => {
        const entry = e.target.parentNode;
        const list = entry.parentNode;

        // if there is not mesage hide the section
        if (list.children.length <= 1) {
            messageSection.style.display = 'none';
        }
        entry.remove();
    })




    newMessage.appendChild(edit_button);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    
})