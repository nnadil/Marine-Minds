document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000); // Change image every 3 seconds

    showSlide(currentSlide); // Initially show the first slide

    const form = document.querySelector('form');
    const text3 = document.getElementById('name');
    const text4 = document.getElementById("email");
    const text7 = document.getElementById('textarea');
    const text10 = document.getElementById('offers');
    const text11 = document.getElementById('additional');
    const out3 = document.getElementById('output1');
    const btn3 = document.getElementById('btn1');
    const btnSubmit = document.getElementById('btn');

    function fun1(event) {
        event.preventDefault(); // Prevent form submission and page reload
        const text5 = document.querySelector("input[name='visit']:checked");
        const text6 = document.querySelector("input[name='easy']:checked");
        const text8 = document.querySelector("input[name='stars']:checked");
        const text9 = document.querySelector("input[name='RY']:checked");
        out3.innerHTML = `Name: ${text3.value}<br>Email: ${text4.value}<br>Visit: ${text5 ? text5.value : 'Not specified'}
        <br>Easy to navigate: ${text6 ? text6.value : 'Not specified'}<br>Improvements: ${text7.value}
        <br>Stars: ${text8 ? text8.value : 'Not specified'}<br>Do you recommend: ${text9 ? text9.value : 'Not specified'}
        <br>Like to receive updates: ${text10.value}<br>Additional requests: ${text11.value}`;
        openPopup(); // Open the preview popup
    }

    btn3.addEventListener('click', fun1);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validate()) {
            openPopup1();
            clearForm();
        }
    });

    let popup = document.getElementById("popup");
    let popup1 = document.getElementById("popup1");

    function openPopup() {
        popup.classList.add("open-popup");
    }

    function closePopup() {
        popup.classList.remove("open-popup");
    }

    function openPopup1() {
        popup1.classList.add("open-popup1");
    }

    function closePopup1() {
        popup1.classList.remove("open-popup1");
    }

    function clearForm() {
        form.reset();
    }

    function validate() {
        let isValid = true;
        const text5 = document.querySelector("input[name='visit']:checked");
        const text6 = document.querySelector("input[name='easy']:checked");
        const text8 = document.querySelector("input[name='stars']:checked");
        const text9 = document.querySelector("input[name='RY']:checked");

        if (text3.value.trim() === '') {
            alert('Name is required');
            isValid = false;
        } else if (text4.value.trim() === '') {
            alert('Email is required');
            isValid = false;
        } else if (!text5) {
            alert('Please select an option for Visit');
            isValid = false;
        } else if (!text6) {
            alert('Please select an option for Ease of Use');
            isValid = false;
        } else if (!text8) {
            alert('Please select a rating for Stars');
            isValid = false;
        } else if (!text9) {
            alert('Please select an option for Recommendation');
            isValid = false;
        }

        return isValid;
    }
    document.getElementById('btnOK').addEventListener('click', closePopup);
    document.getElementById('btnOK1').addEventListener('click', closePopup1);
});
