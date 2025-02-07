const projects = [
    {
        name: "iDriveWashington",
        deployed:"https://idrivewashington.azurewebsites.net/",
        repo: "https://github.com/bmalkmus/iDriveWash",
        imgPath: `/static/iDriveWash.png`,
        technologies: "MERN Stack, Google Maps API, WSDOT API, Azure Web Services",
        description: "This app is a re-design of Washington Department of Transportation's website to give a more user friendly approach to need to know information."
    },
    {
        name: "Bootleg Cooking",
        deployed:"https://bootleg-cooking.herokuapp.com/",
        repo: "https://github.com/rnyang-16/Project_2",
        imgPath: `/static/main.png`,
        technologies: "jQuery, Sequelize, SQL database, javascript, Node.js, Travis CL, Handlebars npm",
        description: "Our app, Bootleg Cooking, is designed to help our users find a new recipe to try for a meal using ingredients the user already has in their household."
    },
    {
        name: "RealDeals",
        deployed:"https://real--deals.herokuapp.com/",
        repo: "https://github.com/bmalkmus/project3",
        imgPath: `/static/Search.png`,
        technologies: "MySQL, Express.js, React.js, Node.js",
        description: "Our app, Real Deals, is designed to help our users to search multiple website platforms to find the cheapest price."
    },
    {
        name: "Park & Dinner",
        deployed:"https://github.com/bmalkmus/getOutsideApp",
        repo: "https://bmalkmus.github.io/getOutsideApp/",
        imgPath: `/static/ParkApp.png`,
        technologies: "Javascript, HTML5, Materialize CSS, CSS",
        description: "Using third party API's, this website allows you to search for parks around you in Seattle along with 5 closest restaurants to that park's location."
    },
    {
        name: "Workday Planner",
        deployed:"https://bmalkmus.github.io/dailyPlanner/",
        repo: "https://github.com/bmalkmus/dailyPlanner",
        imgPath: `/static/WorkdayPlan.png`,
        technologies: "jQuery, HTML, CSS, localStorage, Moment.js library",
        description: "Here is a daily planner that assists you in your day with color changing input boxes for future, present, and past timeblocks."
    },
    {
        name: "React Google Books Search",
        deployed:"https://book-react-google.herokuapp.com/",
        repo: "https://github.com/bmalkmus/GoogleBookSearch",
        imgPath: `/static/GoogleBook.png`,
        technologies: "MongoDB, Express.js, React.js, Node.js",
        description: "Google Books API search using MERN techniques"
    },
    {
        name: "Weather App",
        deployed:"https://bmalkmus.github.io/WeatherApp/",
        repo: "https://github.com/bmalkmus/WeatherApp",
        imgPath: `/static/WeatherApp.png`,
        technologies: "jQuery, HTML, OpenWeather API, CSS, Bootstrap",
        description: "Searchable city weather forecast."
    },
    {
        name: "Eat Da Burger",
        deployed:"https://burger23eater.herokuapp.com/",
        repo: "https://github.com/bmalkmus/burger",
        imgPath: `/static/Burger_App.png`,
        technologies: "Heroku, Handlebars, MVC architectural pattern, Node.js, Javascript",
        description: "Here is a creation of an interactive burger devouring application that is deployed to Heroku."
    },
    {
        name: "Coding Quiz",
        deployed:"https://bmalkmus.github.io/codingQuiz/",
        repo: "https://github.com/bmalkmus/codingQuiz",
        imgPath: `/static/Quiz.png`,
        technologies: "HTML, Javascript, CSS",
        description: "Class project to create a small little quiz."
    },
];

export default function handler(req, res) {
    res.status(200).json(projects)
  }