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
              <h3>BSc Mathematics at University of Crete - 2019-2024</h2>
              <p>Coursework includes (but not limited to):</p>
              <ul>
                  <li>Python (2 courses)</li>
                  <li>Numerical Analysis</li>
                  <li>Programming Lab (HTML, JavaScript, PHP)</li>
                  <li>Programming (C++)</li>
                  <li>Applications of Probability</li>
                  <li>Design and Analysis of Algorithms</li>
                  <li>Parametric Statistics</li>
              </ul>
          </div>
      </div>

      <div class="contents">
        <div class="card">
            <h3>Selected Books and Online Courses</h2>
                <h4>Books</h3>
                <ul>
                    <li>Introduction to Statistical Learning with R by D. Witten, Gareth M. James, T. Hastie, R. Tibshirani -- <a href="https://www.statlearning.com/">download here</a></li>
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
      <div class="home card">
          <div class="profile">
              <img src="src/pfp.png" alt="Profile Image">
          </div>
          <div class="info">
              <div>
                  <h1 style="margin-top: 0px; margin-bottom: 0px;">Nick Vougioukakis</h1>
              </div>
              <p style="display: flex; flex-direction: column; justify-content: center; margin: 0; align-items: center;">
                  Mathematics student at &nbsp;
                  <a href="http://math.uoc.gr/en/index.html">University of Crete</a>
              </p>
              <img class="uoc" src="src/Logo.png">
              
              <p style="font-size: 12px;"> Email: vougioukakis99 {at} gmail {dot} com</p>
              
              <div class="buttons-div">
                  <a href="https://www.linkedin.com/in/nikolaos-vougioukakis-66a2b7256/" style="background-color: #0077b5;" target="_blank" class="buttons">LinkedIn</a>
                  <a href="https://github.com/vougioukakis" class="buttons" target="_blank">GitHub</a>
              </div>
          </div>
      </div>
  </div>

  <div class="contents" id="contents2" style="display:flex; flex-direction:column; gap:20px">
      <div class="card">
          <p style="margin: 0;">Main interests: Applied and Computational Mathematics, Machine-Statistical Learning, Software Development</p>
      </div>

      <div class="card" id="links">
        <h3>Some nice learning resources</h3>
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