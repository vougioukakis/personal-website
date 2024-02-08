document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("#loader").style.visibility = "visible";
  } else {
      document.querySelector("#loading-screen").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
  }
};

/*
document.onreadystatechange = function() {
  document.querySelector("body").style.visibility = "hidden";
  document.querySelector("#loader").style.visibility = "visible";

};*/
function loadContent(contentId) {
  const mainContent = document.getElementById('mainContent');
  
  switch (contentId) {
      case 'home':
          document.getElementsByClassName("current")[0].className = "not-current";
          console.log(document.getElementById("eduNav").className);
          document.getElementById("homeNav").className = "current";
          loadHomeContent();
          break;
      case 'education':
        document.getElementsByClassName("current")[0].className = "not-current";
          document.getElementById("eduNav").className = "current";
          loadEducationContent();
          break;
      case 'projects':
          mainContent.innerHTML = '<h2>Projects Content</h2><p>This is the projects section.</p>';
          break;
      case 'learning':
          mainContent.innerHTML = '<h2>Learning Content</h2><p>This is the learning section.</p>';
          break;
      default:
          console.error('Invalid content ID:', contentId);
  }
}

function loadEducationContent() {
  const educationContent = `
        <div class="contents">
            <div class="card">
                <h3 class="card-title">BSc Mathematics at UOC - 2019-2024</h2>

                    <p>Coursework includes (but not limited to):</p>
                    <ul>
                        <li>Python (2 courses)</li>
                        <li>Numerical Analysis</li>
                        <li>Numerical Solution of O.D.E.s</li>
                        <li>Programming Lab (HTML, CSS, JavaScript, PHP, C)</li>
                        <li>Programming (C++)</li>
                        <li>Object Oriented Programming (Java)</li>
                        <li>Real Analysis (Lebesgue Measure & integration on real axis)</li>
                        <li>Applications of Probability</li>
                        <li>Design and Analysis of Algorithms</li>
                        <li>Parametric Statistics</li>
                    </ul>

                    <p>Courses I'm taking part in:</p>
                    <ul>
                    <li>Probabilistic Graphical Models (grad)</li>
                    <li>Applied Statistics</li>
                    <li>Data Science and applications</li>
                    <li>The Complete Web Dev Bootcamp (Udemy)</li>
                    </ul>

            </div>
        </div>

      <div class="contents">
        <div class="card">
            <h3 class="card-title">Selected Books and Online Courses</h2>
                    <h4>Books</h3>
                    <ul>
                        <li>Introduction to Statistical Learning with R by D. Witten, Gareth M. James, T. Hastie, R. Tibshirani -- <a class="link" href="https://www.statlearning.com/">download here</a></li>
                        <li>Intro to Algorithms by Cormen, Leiserson, Rivest, Stein</li>
                        <li>Linear Algebra and Applications by G. Strang</li>
                        <li>Intro to Numerical Analysis by G.Akrivis, V.Dougalis</li>
                        <li>Numerical Methods for O.D.Es by G.Akrivis, V.Dougalis</li>
                        <li>Programming with C++ by Stroustrup</li>
                        <li>Real Analysis by N.L. Carothers</li>
                        <li>Classical Mechanics by Kibble, Berkshire</li>
                    
                    </ul>
        </div>
      </div>
  `;

  document.getElementById('mainContent').innerHTML = educationContent;
}

function loadHomeContent() {
  const homeContent = `
        <div class="contents">
            <div class="card">
                    <h3 class="card-title">About Me</h3>
                    <div class="content-box">
                        <p style="margin: 0;">My main interests are Applied and Computational Mathematics, Machine-Statistical Learning and Software Development. I love turning ideas into reality through code and discovering the world by using data.</p>
                    </div>
            </div>
        </div>

        <div class="contents">
            <div class="card" id="links">
                <h3 class="card-title">Some nice learning resources</h3>
                    <a href="https://collegecompendium.org/explore"><img src="src/colcomp.png"></a>

                    <a href="https://ocw.mit.edu/"><img src="src/ocw.png"></a>

                    <a href="https://www.freecodecamp.org/"><img src="src/fcc.png"></a>

                    <a href="https://linuxjourney.com/"><img src="src/lj.png"></a>

                    <a href="https://bulletin.math.uoc.gr/work/autolist.php?decade=2020"><img src="src/hms.png"></a>
            </div>

        </div>
  
  `;

  document.getElementById('mainContent').innerHTML = homeContent;
}

// Call loadHomeContent when the page loads
window.onload = function() {
  loadHomeContent();
};

function toggleMail() {
    var element = document.getElementById('mailBox');
    if (element.style.display === 'none' || element.style.display === '') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
}