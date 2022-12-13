const helpers = {
  jsify(string) {
    return string + '.js';
  },

  slug(string) {
    return string.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
  },

  capitalizeFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

const model = {

  init() {
    console.log('Model is ready');
  },

  icons: {
    close: `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-close" fill="none" viewBox="0 0 18 17">
      <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
      </path>
    </svg>`,

    threeDots: `<svg width="24px" height="24px" viewBox="0 0 24 24" id="three-dots" xmlns="http://www.w3.org/2000/svg">
      <g id="_20x20_three-dots--grey" data-name="20x20/three-dots--grey" transform="translate(24) rotate(90)">
        <rect id="Rectangle" width="24" height="24" fill="none"/>
        <circle id="Oval" cx="1" cy="1" r="1" transform="translate(5 11)" stroke="#000" stroke-miterlimit="10" stroke-width="0.5"/>
        <circle id="Oval-2" data-name="Oval" cx="1" cy="1" r="1" transform="translate(11 11)" stroke="#000" stroke-miterlimit="10" stroke-width="0.5"/>
        <circle id="Oval-3" data-name="Oval" cx="1" cy="1" r="1" transform="translate(17 11)" stroke="#000" stroke-miterlimit="10" stroke-width="0.5"/>
      </g>
    </svg>`
  },

  projects: [
    {
      project: "Romato",
      stack: ["node", "express", "mongoose", "pug"],
      description:
        "A Zomato Clone: Lets you create account, add restaurants, search, review and more...",
      website: "https://romato.glitch.me/",
      github: "https://github.com/staringelf/Romato",
      image:
        "https://user-images.githubusercontent.com/40386632/207028260-d82a5cb3-1f70-4d5a-8471-4c555651d67e.png",
      features: ["A fullstack javascript application", "Includes A Rest API", "Completely Responsive"],
      status: "Live"
    },
    {
      project: "Breakout",
      stack: ["javascript", "canvas"],
      description:
        "The famous Breakout (Brick Breaker) game crafted with vanilla JavaScript and Canvas",
      website: "https://staringelf.github.io/breakout",
      github: "https://github.com/staringelf/Breakout",
      features: ["Built in vanilla javascript", "Utilizes HTML5 Canvas", "Play in mobile and desktop"],
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
      status: "Live"
    },
    {
      project: "Todo List",
      stack: ["react", "tailwind", "local-storage"],
      description:
        "A React.js todo list crafted using tailwind css and modern React.",
      website: "https://todo-list-flame-pi.vercel.app/",
      github: "https://github.com/staringelf/React-Todo-List",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png",
        features: ["Utilizes React Hooks", "Built with elegance of tailwind CSS", "UI/UX"],
      status: "Live"
    },
    {
      project: "Meme Maker",
      stack: ["javascript", "canvas"],
      description:
        "A meme creator crafted using vanilla javaScript and HTML5 Canvas (MVC)",
      website: "https://staringelf.github.io/meme-maker",
      github: "https://github.com/staringelf/Meme-Maker",
      features: ["Utilizes HTML5 Canvas", "Upload picture, Add Text", "Download the meme created"],
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
      status: "Live"
    },
    {
      project: "Weather App",
      stack: ["react", "apis"],
      description:
        "A React.js Weather App that utilizes React and open source APIs",
      website: "https://react-weather-app-six-phi.vercel.app/",
      github: "https://github.com/staringelf/React-Weather-App",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png",
        features: ["Built with React", "Utilizes openWeatherDB and citiesDB"],
      status: "Live"
    },
    {
      project: "React Cart Drawer",
      stack: ["react", "tailwind"],
      description:
        "A cart drawer that utilizes react, tailwind and localStorage Api",
      website: "http://react-drawer-seven.vercel.app/",
      github: "https://github.com/staringelf/React-Drawer",
      features: ["Collection Page Mockup", "Retains Memory", "Crafted with tailwind"],
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
      status: "Live"
    },
    {
      project: "Catch The Insect",
      stack: ["javascript", "CSS"],
      description:
        "A catch the insect game (not quite!)",
      website: "http://apex-21india.github.io/insects",
      github: "https://github.com/apex-21india/apex-21india.github.io/tree/master/insects",
      features: ["Uses raw CSS, JS", "Original Credit: Florin Pop"],
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
      status: "Live"
    },
    {
      project: "Whack A Mole",
      stack: ["javascript", "CSS"],
      description:
        "Classic Whack The Mole Game Returns in Web!",
      website: "https://apex-21india.github.io/WhackAMole/",
      github: "https://github.com/apex-21india/apex-21india.github.io/tree/master/WhackAMole",
      features: ["Utilizes raw Javascript", "Uses CSS", "Completely Responsive in all screens"],
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
      status: "Live"
    },
    {
      project: "Crazy Walls",
      stack: ["javascript", "CSS"],
      description:
        "",
      website: "http://apexindia.github.io/crazywalls",
      github: "https://github.com/apexindia/apexindia.github.io/tree/main/crazywalls",
      features: ["Utlizes HTML, CSS, JS"],
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
      status: "Live"
    },
    {
      project: "Apex India",
      stack: ["HTML", "CSS", "javascript"],
      description:
        "Website for local firm Apex India",
      website: "http://apexindia.github.io/",
      github: "https://github.com/apexindia/apexindia.github.io/",
      features: ["Built with modern JS", "Generates HTML from json", "Includes working Contact Form"],
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
      status: "Live"
    },
    {
      project: "Picture Book",
      stack: ["react", "node", "express", "redux", "mongoose"],
      description:
        "A fullstack javascript application using React.js, Node, Express, Mongoose, Redux and friends..",
      website: "",
      github: "",
      features: ["A fullstack social media application", "Includes Authentication", "Currently In development"],
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
      status: "In development"
    },
    {
      project: "React Ecommerce",
      stack: ["next", "react", "keystone", "node", "graphql"],
      description:
        "A fullstack React application using Next.js, Keystone, Apollo Client, Graphql and friends..",
      website: "",
      github: "https://github.com/staringelf/arena-of-life",
      features: ["A Next.js Ecommerce web app", "Crafted with Graphql and tailwind", "Currently In development"],
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
      status: "In development"
    }
  ]
}

const controller = {
  init() {
    model.init();
    view.init();
  },

  getModel () {
    return model;
  },

  stackName(item) {

    const { jsify } = helpers;

    switch (item){
      case 'react':
      case 'node':
      case 'next':
        return jsify(item);
      default:
        return item;
    }
  },
  
  showDetails(project) {
    const details = project.querySelector('.project__details');
    details.classList.add('-translate-Y-100');
  },

  closeDetails(project) {
    const details = project.querySelector('.project__details');
    details.classList.remove('-translate-Y-100');  
  }
}

const view = {
  init() {
    this.cards = [];
    this.projectsRoot = document.querySelector('#projects');
    this.setupEventListeners();
    this.render();
  },

  setupEventListeners() {
    this.projectsRoot.onclick = this.handleProjectsRootClick.bind(this);
  },

  handleProjectsRootClick(e) {
    let target = e.target;
    if (!(target.dataset && target.dataset.action)){
      target = target.closest('[data-action]');
    }
    if (!target) return;
    switch(target.dataset.action){
      case 'show-details':
        controller.showDetails(target.closest('.project'));
        break;
      case 'close-details': 
        controller.closeDetails(target.closest('.project'));
        break;
      default:
        break;
    }
  },

  render() {

    const { capitalizeFirstLetter, slug } = helpers;

    const { projects, icons: { close: iconClose, threeDots } } = controller.getModel();

    const html = projects.map((project) => {

      const {
        project: name, stack, description, website, github, image, status, features, need
      } = project;

      const stackHTML = stack.map((item) => (
        `<span class="stack__item stack__item--${item}">
          ${capitalizeFirstLetter(controller.stackName(item))}
        </span>`
      )).join('');

      const featuresHTML = features.map((feature) => (
        `<li class="project__feature">
          ${feature}
        </li>`
      )).join('');

      const detailsHTML = `
        <h3 class="project__name">
          ${name}
        </h3>
        <button data-action="close-details" class="project__details-close">
          <span>${iconClose}</span>
        </button>
        <small class="project__status">${status}</small>
        <p class="project__description">${description}</p>
        <h4 class="project__details-title">Features</h4>
        <ul class="project__features">
          ${featuresHTML}
        </ul>
      `;

      return `<div class="project">
      <div class="project__image">
        <a href="${website}">
          <img src="./images/${slug(name)}.png" alt="${name} snapshot">
        </a>
      </div>  
      <div class="project__info">
        <div class="project__stack">
          ${stackHTML}
        </div>
        <div class="project__block project__block-title-wrap">
          <h3 class="project__name">
            ${name}
          </h3>        
          <button class="project__learn-more" data-action="show-details">
            <span>${threeDots}</span>
            <span class="visually-hidden"> Learn More </span>
          </button>
        </div>
        <div class="project__links">
          <a class="project__link project__link--website" href=${website ? website : '#'} target="_blank">
            Website
          </a>
          <a class="project__link project__link--github" href=${github ? github : '#'} target="_blank">
            Github
          </a>
        </div>
      </div>
      <div class="project__details">
        ${detailsHTML} 
      </div>
    </div>`
    }).join('');

    this.projectsRoot.innerHTML = html;
    
  }
}

controller.init();