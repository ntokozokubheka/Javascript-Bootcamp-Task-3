var studentDatabase = [
    { id: 101, firstName: "Sipho", lastName: "Dlamini", email: "sdlamini@edu.com", course: "Software Systems", age: 22 },
    { id: 102, firstName: "Thando", lastName: "Khumalo", email: "tkhumalo@edu.com", course: "Applied Data Architectures", age: 24 },
    { id: 103, firstName: "Nondumiso", lastName: "Zulu", email: "nzulu@edu.com", course: "Cybersecurity Frameworks", age: 21 },
    { id: 104, firstName: "Bongani", lastName: "Mthembu", email: "bmthembu@edu.com", course: "UI Engineering Design", age: 19 },
    { id: 105, firstName: "Zama", lastName: "Ndlovu", email: "zndlovu@edu.com", course: "Cloud Computing Infrastructures", age: 26 }
];

function runSynchronousDemo() {
    console.log("Step-1 - The function is starting");
    console.log("Step-2 - The Process is in action");
    console.log("Step-3 - The function reached the final stage");
}

function fetchStudentsDelayed() {
    setTimeout(function() {
        console.table(studentDatabase);
        studentDatabase.forEach(function(item) {
            console.log(item.id + " : " + item.firstName + " " + item.lastName + " -> " + item.course);
        });
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    var sBtn = document.getElementById('syncTrigger');
    var aBtn = document.getElementById('asyncTrigger');

    if (sBtn) {
        sBtn.addEventListener('click', runSynchronousDemo);
    }
    if (aBtn) {
        aBtn.addEventListener('click', fetchStudentsDelayed);
    }
});