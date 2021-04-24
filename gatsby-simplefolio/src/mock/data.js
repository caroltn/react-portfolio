import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Carol Nguyen',
  subtitle: 'UX/UI Developer In-Training',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hi, my name is Carol and I am learning how to build websites.',
  paragraphTwo: 'I am currently looking for an opportunity to work with a JavaScript framework.',
  paragraphThree: 'In my free time, I enjoy playing video games and playing with my dog.',
  resume: 'https://www.linkedin.com/in/caroltn/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'COVID Resource',
    info:
      'For those who are looking to get tested for COVID and are curious about recent U.S. cases. COVID Resource allows users to search for COVID testing centers by city and state and shows users the 10 closest locations.',
    info2:
      'Technologies used: Materialize, MapQuest API, HERE Geocoding and Search API, COVID-19 Data API, Tailor Brands',
    url: 'https://caroltn.github.io/covid-resource/',
    repo: 'https://github.com/caroltn/covid-resource', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Stonk Stalks',
    info:
      'Our app is for the modern Animal Crossing player who is trying to get rich quick through the games turnip market mechanic akin to the real world stock market. Users are able to create posts to invite other players onto their island or find islands to engage with the stalk market themselves.',
    info2: 'Technologies used: Bootstrap, Passport.js, Express, Sequelize',
    url: 'https://limitless-fortress-65893.herokuapp.com/',
    repo: 'https://github.com/caroltn/stonkStalks', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'MemeMonarch',
    info: 'A place to share the zestiest memes.',
    info2: 'Technologies used: Firebase, React.js',
    url: 'https://peaceful-sea-74633.herokuapp.com/',
    repo: 'https://github.com/jvillacinda11/mememonarch', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to work with me?',
  btn: 'Send a message',
  email: 'cthoa02@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: 'https://twitter.com/cawoahs',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/caroltn/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/caroltn/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
