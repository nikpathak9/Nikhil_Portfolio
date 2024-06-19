const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/nikhil_portfolio',
  title: '<NP />',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Nikhil Pathak',
  role: 'Front End Engineer',
  description:
    'Hello! I am Nikhil Pathak, a frontend engineer with a passion for crafting seamless user experiences. With expertise in HTML, CSS, and JavaScript, I specialize in turning ideas into polished interfaces. I thrive on exploring new technologies like React.js and Angular to build dynamic web applications. Lets collaborate and bring your digital vision to life!',
  resume:
    'https://drive.google.com/file/d/1XTjTEW303_mTVJ5RGen4zQdYoPKl_KBY/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/nikhil-pathak-597708196/',
    github: 'https://github.com/nikpathak9',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'AchieVIT',
    description:
      'A web application designed to centralize the achievements and records of faculty members within a university.',
    stack: ['React', 'Redux'],
    sourceCode: 'https://github.com/nikpathak9/achieVIT',
    livePreview: '',
  },
  {
    name: 'Food Delivery App',
    description:
      'Food delivery project developed with React.js and Redux.Provides a seamless user experience for ordering food online with efficient state management.',
    stack: ['React', 'Redux'],
    sourceCode: 'https://github.com/nikpathak9/FoodDeliveryApp',
    livePreview: '',
  },
  {
    name: 'Gesture Recognition',
    description:
      'Developed a web application using ReactJS and Tensorflow forreal-time hand gesture recognition. Implemented Tensorflow fortraining and inference, allowing the application to recognize hand gestures such as the ”V” symbol and thumbs up, and display the corresponding emoji.',
    stack: ['React', 'Tensorflow'],
    sourceCode: 'https://github.com/nikpathak9/Gesture-Recognition',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JAVA',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Material UI',
  'Git',
  'OOPS',
  'DSA',
  'Rest APIs',
  'MySQL',
  'Jest',
  'Springboot',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'nikpathak9@mail.com',
}

export { header, about, projects, skills, contact }
