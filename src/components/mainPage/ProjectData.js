import QuizApp from './jpgs/QuizApp.jpg';
import BorderRadius from './jpgs/Border-Radius.PNG';
import Calculator from './jpgs/Calculator.jpg';
import BookFinder from './jpgs/Book-Finder.JPG';
import GradeParticipation from './jpgs/grade-participation.JPG';
import ChoreBot from './jpgs/Chore-Bot.JPG';
import calculator from './gifs/calculator.gif';
import bookFinder from './gifs/bookFinder.gif';
import QuizAppMoving from './gifs/QuizAppMoving.gif';
import borderRadius from './gifs/border-radius-previewer.gif';
import gradeParticipation from './gifs/gradeParticipation.gif';
import choreBot from './gifs/choreBot.gif';
import Musicon from './jpgs/Musicon.jpg';
import musiconGif from './gifs/musiconGif.gif';

  export default  [
    {
        title: 'Chore Bot Game',
        imageUrl: ChoreBot,
        description: 'In this game, the user must select one of three doors while trying to avoid the chore bot who hides behind one of the doors. This application is built in raw javascript (no libraries), and it manipulates DOM elements to display different images onto the HTML, canvas element.',
        gifUrl: choreBot,
        sourceLink: 'https://github.com/thomasdefilippis/Chore-Bot-Game'
    },
    {
        title: 'Quiz App',
        imageUrl: QuizApp,
        description: 'A full-stack PERN app running live on a digital ocean droplet, this program accesses a PostgreSQl database through an API built in Node Express. Nginx reverse proxies the client side produced with ReactJs. Access the live website below:',
        edabit: "http://quizappthomasdefilippis.com/",
        gifUrl: QuizAppMoving,
        sourceLink: 'https://github.com/thomasdefilippis/quiz'
    },
    

    {
        title: 'Book-Finder App',
        imageUrl: BookFinder,
        description: "Developed with React and Material UI, this application fetches data from the google books API and extracts ten books from the returned json object. The application grabs the user's text input for Author and/or Title and uses them to manipulate the query parameters on the API url.",
        gifUrl: bookFinder,
        sourceLink: 'https://github.com/thomasdefilippis/Book-Finder-App'
    },

    {
        title: 'Chrome Calculator Extension',
        imageUrl: Calculator,
        description: 'A calculator loaded as a web extension into the chrome browser. Developed in React, this app deals with the order of operations by sorting the given string into two arrays: a numbers array, and an operations array. After that, it loops through the arrays and determines which operations to perform first.',
        gifUrl: calculator,
        sourceLink: 'https://github.com/thomasdefilippis/React-JS-Calculator'
    },
    

    {
        title: 'Grade Participation App',
        imageUrl: GradeParticipation,
        description: 'A React application that loops through 15 questions per student and collects the overall score, averaging it at the end. As I was previously a teacher. I created this app to speed up participation grades. ',
        gifUrl: gradeParticipation,
        sourceLink: 'https://github.com/thomasdefilippis/Student-Participation-Grader'
    },

    {
        title: 'Border-Radius Previewer',
        imageUrl: BorderRadius,
        description: 'Built in React, this app allows the user to manipulate the border radius of a div element to create a wide variety of shapes. The React Component uses the state to pass a border radius value to other child components as a prop in order to change the shape of the div.',
        gifUrl: borderRadius,
        sourceLink: 'https://github.com/thomasdefilippis/Border-Radius-Previewer'
    },

    {
        title: 'Musicon Website',
        imageUrl: Musicon,
        description: 'A demo music website developed in handlebarsjs. This website uses a template from handlebars to display musical instruments that are available for sale.',
        gifUrl: musiconGif,
        sourceLink: 'https://github.com/thomasdefilippis/Musicon'
    }
]

