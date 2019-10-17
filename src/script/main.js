const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]


const createStudentComponent = (students) => {          //creation of function name
    let htmlText = ""                                   //space to place results
    for(let i=0; i < students.length; i++) {            //loop iteration of array students
        if (students[i].score >= 60) {                  
            studentComponent = "passing";               //decides if passing or failing goes into h1 below
        } else {
            studentComponent = "failing";
        }
        htmlText += `
        <div class="student">
        <h1 class="xx-large ${studentComponent}">${students[i].name}</h1>
        <section class="bordered dashed section--padded">${students[i].subject}</section>
        <aside class="pushRight">${students[i].info}</aside>
        </div>
        `
        }
    return htmlText;                                    //creates htmlText with the html code
}

const studentContainer = document.querySelector("#container") //connects html and javascript
studentContainer.innerHTML = createStudentComponent(students); //places javascript changes in html





