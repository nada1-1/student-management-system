class Student {

    constructor(id, name, grades, attendance) {

        this.id = id;

        this.name = name;

        this.grades = grades;

        this.attendance = attendance;

    }

    calculateAverage() {

        let total = this.grades.reduce((sum, grade) => {

            return sum + grade;

        }, 0);

        return total / this.grades.length;

    }

    getGrade() {

        let average = this.calculateAverage();

        if (average >= 90) {

            return "A";

        }

        else if (average >= 80) {

            return "B";

        }

        else if (average >= 70) {

            return "C";

        }

        else if (average >= 60) {

            return "D";

        }

        else if (average >= 50) {

            return "E";

        }

        else {

            return "F";

        }

    }
    getResult() {

    let average = this.calculateAverage();

    if (average >= 50 && this.attendance >= 75) {

        return "ناجح";

    }

    else {

        return "يحتاج مراجعة";

    }

}

}

// إنشاء الطالب خارج الـ Class

let studentsList = [

    new Student(101, "Nada", [80, 90, 70], 90),

    new Student(102, "Huda", [45, 40, 50], 80),

    new Student(103, "Abdelrhman", [95, 90, 100], 95),

    new Student(104, "Salma", [40, 45, 42], 90)

];
studentsList.forEach(student => {

    console.log("Student Name:", student.name);

    console.log("Average:", student.calculateAverage());

    console.log("Grade:", student.getGrade());

    console.log("Final Result:", student.getResult());

    console.log("========================");

});


let strugglingStudents = studentsList.filter(student => {

    let average = student.calculateAverage();

    return average >= 40 && average <= 49;

});

console.log("Struggling Students:", strugglingStudents);


let studentsAfterBonus = strugglingStudents.map(student => {

    return {

        name: student.name,

        newAverage: student.calculateAverage() + 5

    };

});

console.log("Students After Bonus:", studentsAfterBonus);


let totalAfterBonus = studentsAfterBonus.reduce((sum, student) => {

    return sum + student.newAverage;

}, 0);

console.log("Total After Bonus:", totalAfterBonus);


let bonusAverage = 0;

if (studentsAfterBonus.length > 0) {

    bonusAverage = totalAfterBonus / studentsAfterBonus.length;

}

console.log("Bonus Average:", bonusAverage);