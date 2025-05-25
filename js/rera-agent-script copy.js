 // onclick agent PROFILE open model form and get input from user and display the agent number

  document.querySelectorAll('.get-contact').forEach((el, index) => {
      // index starts at 0, so we add 1
      el.setAttribute('data-target', `#agentModal${index + 1}`);
      el.addEventListener('click', function () {
        let targetModel = el.getAttribute('data-target');
        if (targetModel.startsWith("#")) {
          targetModel = targetModel.slice(1);
        }
        document.querySelector('.modal.agent-model').setAttribute("id", targetModel);
        let agentName = el.previousElementSibling.innerHTML;
        console.log(agentName);

        let agentContact = el.nextElementSibling.innerHTML;
        console.log(agentContact);

        document.getElementById("agentName").value = agentName;  

        document.getElementById("#show-agent-name").textContent = agentName;
        document.getElementById("#show-agent-contact").textContent = agentContact;

 
        

      });
  });

  document.getElementById("agentInput").addEventListener("click", function () {
    // e.preventDefault();
    let agentName = document.getElementById("agentName").value;
    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userContact = document.getElementById("userContact").value;

    console.log(agentName, userName, userEmail, userContact);

  });
