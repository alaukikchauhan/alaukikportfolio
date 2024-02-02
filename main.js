const textToType = "Full Stack Developer";
let str = "";
let txtArr = textToType.split('');
typeText(0);
function typeText() {   
    if (txtArr.length) {
        str = str + txtArr.shift();
        setTimeout(() => {
            document.getElementById("typed-text").textContent = str;
            typeText();
        }, 200);
    }
    else if (str.length) {
      const d = str.split('');
      d.pop();
      str = d.join('');
      setTimeout(() => {
        document.getElementById("typed-text").textContent = str;
        typeText();
    }, 200);
    }
    else {
        txtArr = textToType.split('');
        typeText();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#navbarTogglerDemo01 a');

    window.addEventListener('scroll', function () {
      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
          link.classList.add('active');
        }
      });
    });
  });