 // onclick agent PROFILE open model form and get input from user and display the agent number



 document.querySelectorAll('.get-contact').forEach((el, index) => {
   // alert("ancher tag");
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
     document.getElementById("agentName").value = agentName;

     let agentContact = el.nextElementSibling.innerHTML;
     console.log(agentContact);

     // Save to localStorage
     localStorage.setItem("displayAgentName", agentName);
     localStorage.setItem("displayAgentContact", agentContact);


     //  document.querySelector("#show-agent-name").innerHTML = agentName;
     //  document.querySelector("#show-agent-contact").innerHTML = agentContact;


   });
 });



 document.getElementById("agentInput").addEventListener("click", function () {

   document.getElementById("show-agent-name").textContent = localStorage.getItem("displayAgentName") || "No Agent Name";
   document.getElementById("show-agent-contact").textContent = localStorage.getItem("displayAgentContact") || "No Agent Contact";

   // Optional: Clear after use
   localStorage.clear();


   let agentName = document.getElementById("agentName").value;
   let userName = document.getElementById("userName").value;
   let userEmail = document.getElementById("userEmail").value;
   let userContact = document.getElementById("userContact").value;
   console.log(getAgentContact, agentName, userName, userEmail, userContact);

 });