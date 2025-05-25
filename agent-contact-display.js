document.getElementById("show-agent-name").textContent = localStorage.getItem("displayAgentName") || "No Agent Name";
document.getElementById("show-agent-contact").textContent = localStorage.getItem("displayAgentContact") || "No Agent Contact";

// Optional: Clear after use
localStorage.clear();