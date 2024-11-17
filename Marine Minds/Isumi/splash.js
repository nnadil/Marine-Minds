document.addEventListener("DOMContentLoaded", function() {
    let splashContainer = document.querySelector(".splash-ctnr");
    let logoImage = splashContainer.querySelector(".logo-image");
    let mainContent = document.querySelector(".Main_content");

    setTimeout(() => {
        logoImage.style.transform = "translateX(-50%) scale(1)";
        logoImage.classList.add("rotate"); 
    }, 0); 

    setTimeout(() => {
        splashContainer.style.top = "-100vh"; 
        mainContent.style.display = "block"; 
    }, 5000);
    function redirectToHomePage() {
        setTimeout(function() {
          window.location.href = "../nadil/homePage.html";
        }, 6000); // 6000 milliseconds = 6 seconds
      }
      
      redirectToHomePage();
});
