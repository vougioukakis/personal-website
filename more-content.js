
//---------- Page content --------------

function loadEducationContent() {
    const educationContent = `
          <div class="contents">
              <div class="card">
                  <h3 class="card-title">BSc Mathematics at UOC - 2019-2024</h2>
  
                      <p>Coursework includes (but not limited to):</p>
                      <ul>
                          <li>Probabilistic Graphical Models (graduate course)</li>
                          <li>Machine Learning</li>
                          <li>Object Oriented Programming (Java)</li>
                          <li>Design and Analysis of Algorithms</li>
                          <li>Python (2 courses)</li>
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
                  <h3 class="card-title">Some nice and free learning resources</h3>
                      <a href="https://collegecompendium.org/explore"><img src="src/colcomp.png"></a>
  
                      <a href="https://ocw.mit.edu/"><img src="src/ocw.png"></a>
  
                      <a href="https://www.freecodecamp.org/"><img src="src/fcc.png"></a>
  
                      <a href="https://linuxjourney.com/"><img src="src/lj.png"></a>

                      <a href="https://www.theodinproject.com/"><img src="src/odin.png"></a>
  
                      <a href="https://bulletin.math.uoc.gr/work/autolist.php?decade=2020"><img src="src/hms.png"></a>
              </div>
  
              ${generatePostsHTML(posts)}
          </div>
  
    `;
    document.getElementById('mainContent').innerHTML = learning_hub_content;
}

function loadProjectsContent() {
    const projectsContent = `
          <div class="contents">
              <div class="card">
                  <h3 class="card-title">YBFinance: A Personal Finance SaaS</h3>
                    <p class="proj-description">A personal finance web application that helps users
                     manage their income, expenses, and budgets effectively. It provides analytics
                     and insights, like Net Worth, Cash Flow and Spendings/Income ratio. Built with NextJS,
                      it offers features like transaction tracking, budget creation, and financial goal setting. 
                      The app utilizes NeonDB Serverless Postgres for data storage and Clerk for secure user
                     authentication and account management.</p>
              </div>
              <div class="card">
                  <h3 class="card-title">Nitro's Drag Strip</h3>
                  <p class="proj-description"><p class="proj-description">
                    A web application that lets you select a car and experience a realistic, interactive
                     acceleration simulation. The app models real-world physics, including load transfers
                     and tire slip ratio, using numerical solutions to differential equations, incorporates 
                     authentic car specifications, and features genuine engine sounds for an immersive experience.
                     Choose your car, your tires, hit the gas, and feel the thrill of the drag strip!
                    </p>
                  <img class="proj-image" src="">
                  <img class="proj-image" src="">
              </div>
              <div class="card">
                  <h3 class="card-title">Fruity</h3>
                  <p class="proj-description">An interactive, user-friendly web app 
                  that identifies fruits from images and displays nutritional information 
                  and fun facts. Focused on creating an intuitive and visually appealing 
                  interface to enhance user engagement and ease of use. Built with JS, Python
                  (Quart) and Pytorch.</p>
                  <img class="proj-image" src="">
                  <img class="proj-image" src="">
              </div>
              <div class="card">
                  <h3 class="card-title">Ferrari Challenge Racecar Showcase</h3>
                  <p class="proj-description">
                    A sleek, frontend-focused web app showcasing Ferrari’s challenge
                     racecars. Users can browse through a carousel of cars, view 
                      images, and read key specifications and descriptions.
                  </p>
                  <img class="proj-image" src="">
                  <img class="proj-image" src="">
              </div>
                `;

    document.getElementById('mainContent').innerHTML = projectsContent;

}
const posts = [

    {
        title: "The SOLID Principles of Object-Oriented Programming Explained in Plain English",
        source: "www.freecodecamp.org",
        href: "https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/",
        img: "src/posts/solid.jpeg"
    },
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