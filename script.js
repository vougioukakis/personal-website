let click_audio = document.getElementById("click-sound");
let muted = 0;

document.getElementById("curr-year").innerHTML = "Nikolaos Vougioukakis " + new Date().getFullYear();

function loadContent(contentId) {
    const mainContent = document.getElementById("mainContent");

    switch (contentId) {
        case "home":
            document.getElementsByClassName("current")[0].className = "not-current";
            console.log(document.getElementById("eduNav").className);
            document.getElementById("homeNav").className = "current";
            loadHomeContent();
            break;
        case "education":
            document.getElementsByClassName("current")[0].className = "not-current";
            document.getElementById("eduNav").className = "current";
            loadEducationContent();
            break;
        case "projects":
            document.getElementsByClassName("current")[0].className = "not-current";
            document.getElementById("projNav").className = "current";
            loadProjectsContent();
            break;
        case "learning hub":
            document.getElementsByClassName("current")[0].className = "not-current";
            document.getElementById("hubNav").className = "current";
            loadLHContent();
            break;
        case "CV":
            break;
        default:
            console.error("Invalid content ID:", contentId);
    }
}

// sounds on click 
function play() {
    if (!muted) {
        click_audio.play();
        console.log('click!');
    }
}

function addClickEventListenersForSound() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', play);
    });
}

function toggleMute() {
    let bgSound = document.getElementById("bg-sound");
    let soundIcon = document.getElementById("sound-option-icon");
    console.log("toggle");

    if (bgSound.paused) {
        muted = 0;
        bgSound.play();
        soundIcon.src = "src/icons/sound-on.svg";


    } else {
        muted = 1;
        bgSound.pause();
        soundIcon.src = "src/icons/sound-off.svg";

    }
}
addClickEventListenersForSound();


/*
window.onload = function() {

  // Get the background image URL of the body element
  var src = document.body.style.backgroundImage;
  src = src.replace('url("', '').replace('")', '');
  console.log("Background image URL:", src);

  var img = new Image();
  img.src = src;

  img.onload = function() {
      // remove loading screen and load content
      document.getElementById("load-screen").style.opacity = 0;
      loadContent('home');
      setTimeout(delete_loading_screen, 400);
  }

  if (img.complete) {
      img.onload();
  }
};
*/
function delete_loading_screen() {
    document.getElementById("load-screen").remove();
}

window.onload = function () {
    loadContent("home");
    document.getElementById("load-screen").style.opacity = 0;
    setTimeout(delete_loading_screen, 1600);

};

function toggleMail() {
    /*
    var element = document.getElementById("mailBox");
    if (element.style.display === "none" || element.style.display === "") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }*/
    let email = "vougioukakis99@gmail.com";
    navigator.clipboard.writeText(email);
    alert("You just copied my email to clipboard: " + email);
}



function loadHomeContent() {
    const homeContent = `
        <div class="contents">
            <div class="card">
                    <h3 class="card-title">About Me</h3>
                    <div class="content-box">
                        <p style="margin: 0;">Hey, I'm Nick! Welcome to my corner of the internet. I'm a math major and software developer. I’m all about solving problems, learning,
                         and being creative,
                         and I find coding to be the perfect way to channel that. I care a lot about helping people learn and passing on what I know.
                         When I’m not writing code, you can usually find me reading books or geeking out over topics like physics, math, and computer science.</p>
                    </div>
            </div>

            <div class="card">
                    <h3 class="card-title">Volunteering</h3>
                    <div class="content-box">
                        <ul>
                          <li>Spring 2024: Teaching Assistant in Numerical Analysis, University of Crete</li>
                        </ul>
                    </div>
            </div>
        </div>

        
  `;

    document.getElementById("mainContent").innerHTML = homeContent;
}