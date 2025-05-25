  // for header and footer inclue to every page
  fetch("top-header.html")
    .then(res => res.text())
    .then(data => document.getElementById("top-header-id").innerHTML = data);

  fetch("header.html")
    .then(res => res.text())
    .then(data => document.getElementById("header-id").innerHTML = data);

  fetch("footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer-id").innerHTML = data);

  // for image gallery
  document.querySelectorAll('.image-gallary .gallery-img').forEach(images => {
    images.addEventListener('click', function () {
      let srcVal = images.src;
      let nextDescription = images.nextElementSibling.innerText;
      let dataTarget = images.getAttribute('data-target');
      if (dataTarget.startsWith("#")) {
        dataTarget = dataTarget.slice(1);
      }
      let dataCaption = images.getAttribute('data-caption');

      document.querySelector('.modal').setAttribute("id", dataTarget);
      document.querySelector('.modal .modal-content .img-fluid').src = srcVal;
      document.querySelector('.modal .modal-content .caption').innerText = dataCaption;
      document.querySelector('.modal .modal-content .cap-description').innerText = nextDescription;
    });
  })

  // for contact us form and setting the subject line in the mail

  document.getElementById("userInput").addEventListener("click", function () {

    // let workType = document.getElementById('work_type').value;
    // console.log(workType);

    // let subjectLine = document.getElementById("subjectLine");
    // subjectLine.setAttribute("value", workType);
    // console.log(subjectLine);

    let selectedService = document.getElementById('service').value;
    console.log(selectedService);

    let subjectLine = document.getElementById("subjectLine");
    subjectLine.setAttribute("value", selectedService);
    console.log(subjectLine);


  });


 



