
//---------- Page content --------------

function loadEducationContent() {
    const educationContent = `
          <div class="contents">
                <div class="card">
                  <h3 class="card-title">MSc Data Analysis and Machine-Statistical Learning at UOC-FORTH - Starting Sep 2024</h2>
                </div>
              <div class="card">
                  <h3 class="card-title">BSc Mathematics at UOC - 2019-2024</h2>
  
                      <p>Coursework includes (but not limited to):</p>
                      <ul>
                          <li>Probabilistic Graphical Models (graduate course)</li>
                          <li>Machine Learning</li>
                          <li>Python (2 courses)</li>
                          <li>Design and Analysis of Algorithms</li>
                          <li>Object Oriented Programming (Java)</li>
                          <li>Applied Statistics</li>
                          <li>Parametric Statistics</li>
                          <li>Real Analysis (Lebesgue Measure & integration on real axis)</li>
                          <li>Numerical Analysis</li>
                          <li>Numerical Solution of O.D.E.s</li>
                          <li>Programming Lab (HTML, CSS, JavaScript, PHP, C)</li>
                          <li>Programming (C++)</li>
                          <li>Applications of Probability</li>
                      </ul>
  
              </div>
              <div class="card">
                <h3 class="card-title">Online Courses</h2>
                <ul>
                        <li>The Complete Web Dev Bootcamp (Udemy)</li>
                      </ul>
              </div>
                      
          </div>
  
        <div class="contents">
          <div class="card">
              <h3 class="card-title">Books I studied</h2>
                      <ul>
                          <li>Introduction to Statistical Learning with R by D. Witten, Gareth M. James, T. Hastie, R. Tibshirani -- <a class="link" href="https://www.statlearning.com/">download here</a></li>
                          <li>Intro to Algorithms by Cormen, Leiserson, Rivest, Stein</li>
                          <li>OpenIntro Statistics by by C. Barr, D. Diez, and M. Çetinkaya-Rundel --  <a class="link" href="https://www.openintro.org/book/os/">download here</a></li>
                          <li>Probabilistic Graphical Models by D. Koller, N. Friedman</li>
                          <li>Linear Algebra and Applications by G. Strang</li>
                          <li>Intro to Numerical Analysis by G.Akrivis, V.Dougalis</li>
                          <li>Numerical Methods for O.D.Es by G.Akrivis, V.Dougalis</li>
                          <li>Programming with C++ by Stroustrup</li>
                          <li>Real Analysis by N.L. Carothers</li>
                          <li>Applied Mathematics by David J. Logan</li>
                          <li>Classical Mechanics by Kibble, Berkshire</li>
                      
                      </ul>
          </div>
        </div>
    `;
  
    document.getElementById('mainContent').innerHTML = educationContent;
  }
  
  
  function loadLHContent() {
    const learning_hub_content = `
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
    document.getElementById('mainContent').innerHTML = learning_hub_content;
  }
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
    },
  
    {
      title: "Abusing Generative Adversarial Networks to Make 8-bit Pixel Art",
      source: "medium.com",
      href: "https://medium.com/@ageitgey/abusing-generative-adversarial-networks-to-make-8-bit-pixel-art-e45d9b96cee7",
      img: "src/posts/pixel-art.png"
      
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