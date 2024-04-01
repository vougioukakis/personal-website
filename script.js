function loadContent(contentId) {
  const mainContent = document.getElementById('mainContent');
  var first_open = 1;
  
  switch (contentId) {
      case 'home':
          document.getElementsByClassName("current")[0].className = "not-current";
          console.log(document.getElementById("eduNav").className);
          document.getElementById("homeNav").className = "current";
          loadHomeContent();
          scrollToTop(first_open);
          first_open = 0;
          //setTimeout(blurFade, 100);
          break;
      case 'education':
        document.getElementsByClassName("current")[0].className = "not-current";
          document.getElementById("eduNav").className = "current";
          loadEducationContent();
          scrollToTop(first_open);
          //setTimeout(blurFade, 100);
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

function scrollToTop(first_open){
  if (first_open == 0) {
    window.scrollTo(0, 200);
  } else {
    window.scrollTo(0, 0);
  }
}
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






function delete_loading_screen(){
  document.getElementById("load-screen").remove();
}
function blurFade() {
  var cards = document.getElementsByClassName("card");

      for (var i = 0; i < cards.length; i++) {
        cards[i].style.backdropFilter = "blur(30px)";
        cards[i].style.webkitBackdropFilter = "blur(30px)";
      }
}



function toggleMail() {
  var element = document.getElementById('mailBox');
  if (element.style.display === 'none' || element.style.display === '') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}



//---------- Page content --------------

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
                    <li>Machine Learning</li>
                    <li>Probabilistic Graphical Models (grad)</li>
                    <li>Applied Statistics</li>
                    <li>Descriptive Statistics</li>
                    <li>Optimization Theory</li>
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
                        <p style="margin: 0;">My main interests are Applied and Computational Mathematics,
                         Machine-Statistical Learning and Software Development.
                         I love turning ideas into reality by using code and exploring the world through data.
                          You'll often find me soaking up knowledge in books or experimenting with new code.</p>
                    </div>
            </div>

            <div class="card">
                    <h3 class="card-title">Experience</h3>
                    <div class="content-box">
                        <ul>
                          <li>2024-Present: Teaching Assistant in Numerical Analysis, University of Crete</li>
                        </ul>
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

            ${generatePostsHTML(posts)}
        </div>
  `;

  document.getElementById('mainContent').innerHTML = homeContent;

}

// Sample array of dictionary elements
const posts = [
  {
    title: "The Math behind the Adam Optimizer",
    source: "towardsdatascience.com",
    href: "https://towardsdatascience.com/the-math-behind-adam-optimizer-c41407efe59b#5ff9",
    img: "src/posts/adam-opt.webp"
  },

  {
    title: "What is an autoencoder?",
    source: "ibm.com",
    href: "https://www.ibm.com/topics/autoencoder",
    img: "src/posts/autoencoder.png"
  }
  // Add more posts as needed
];

function generatePostsHTML(posts) {
  let html = '';
  posts.forEach(post => {
    html += `
      <a class="post" href="${post.href}"  style="background-image: url('${post.img}')">
        <div>
          <div class="post-title-cont">
            <h3 class="post-title">${post.title}</h3>
          </div>
        </div>
        <div class="post-source-cont">
          <p class="post-source">${post.source}</p>
        </div>
      </a>`;
  });
  return html;
}