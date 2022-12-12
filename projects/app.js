const model = {

  init() {
    console.log('Model is ready');
  },

  projects: [
    {
      project: "Romato",
      stack: ["node", "express", "mongo", "pug"],
      description:
        "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
      website: "https://romato.glitch.me/",
      github: "https://github.com/staringelf/Romato",
      image:
        "https://user-images.githubusercontent.com/40386632/207028260-d82a5cb3-1f70-4d5a-8471-4c555651d67e.png",
      needs: "People with super powers",
      status: "In Development"
    },
    {
      project: "Breakout",
      stack: ["javascript", "canvas"],
      description:
        "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
      website: "https://staringelf.github.io/breakout",
      github: "https://github.com/staringelf/Breakout",
      needs: "People with super powers, semi-super powers, or no powers at all",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
      status: "Live"
    },
    {
      project: "Todo List",
      stack: ["react", "tailwind", "localstorage"],
      description:
        "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
      website: "https://todo-list-flame-pi.vercel.app/",
      github: "https://github.com/staringelf/React-Todo-List",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png",
      needs: "People with super powers",
      status: "In Development"
    },
    {
      project: "Meme Maker",
      stack: ["python", "django"],
      description:
        "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
      website: "https://staringelf.github.io/meme-maker",
      github: "https://github.com/staringelf/Meme-Maker",
      needs: "People with super powers, semi-super powers, or no powers at all",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
      status: "Live"
    },
    {
      project: "Weather App",
      stack: ["react", "apis"],
      description:
        "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
      website: "https://react-weather-app-six-phi.vercel.app/",
      github: "https://github.com/staringelf/React-Weather-App",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png",
      needs: "People with super powers",
      status: "In Development"
    },
    {
      project: "React Cart Drawer",
      stack: ["react", "tailwind"],
      description:
        "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
      website: "http://react-drawer-seven.vercel.app/",
      github: "https://github.com/staringelf/React-Drawer",
      needs: "People with super powers, semi-super powers, or no powers at all",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
      status: "Live"
    }
  ]
}

const controller = {
  init() {
    model.init();
    view.init();
  },

  getModel () {
    return model
  }
}

const view = {
  init() {
    this.cards = [];
    this.projectsRoot = document.querySelector('#projects');
    this.render();
  },

  render() {

    this.projectsRoot.innerHTML = '';

    const { projects } = controller.getModel();

    const html = projects.map((project) => {

      const {
        project: name, stack, description, website, github, image, status
      } = project;

      const stackHTML = stack.map((item) => (
        `<span class="stack__item stack__item--${item}">
          ${item}
        </span>`
      )).join('');

      return `<div class="project">
      <div class="project__image">
        <a href="${website}">
          <img src=${image} alt=${project} snapshot>
        </a>
      </div>  
      <div class="project__info">
        <div class="project__stack">
          ${stackHTML}
        </div>
        <h3 class="project__name">
          ${name}
        </h3>        
        <div class="project__links">
          <a class="project__live" href=${website}>
            Live
          </a>
          <a class="project__github" href=${github}>
            Github
          </a>
        </div>
    </div>
    </div>`
    }).join('');

    this.projectsRoot.innerHTML = html;
    
  }
}

controller.init();