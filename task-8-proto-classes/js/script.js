class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [];
        this.accepted = true;
    }

    getInfo = () => {
        return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`;
    }

    getAverageMark = () => {
        if (this.accepted) {
            const sum = this.marks.reduce((prev, total) => total + prev, 0);
            const count = this.marks.length;

            return +(sum / count).toFixed(1);
        }
        return null;
    }

    get studentMarks() {
        if (this.accepted) return this.marks;
        return null;
    }

    set studentMarks(mark) {
        if (this.accepted) this.marks.push(mark);
    }

    dismiss = () => {
        this.accepted = false;
    }

    recover = () => {
        this.accepted = true;
    }
}

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);

        this.getScholarship(1500);
    }

    getScholarship = (amount) => {
        if (this.accepted && this.getAverageMark() >= 4) console.log(`Ви отримали ${amount} грн. стипендії`);
        else console.log(`Ви не отримали стипендію`);
        setTimeout(this.getScholarship, 1500, amount);
    }
}

// обычный

console.group('Звичайний студент');

const student = new Student('Вищої Школи Психотерапії м.Одеса', 2, 'Остап Бендер');

console.log('student.getInfo(): ' + student.getInfo());

for (let i = 0; i < 3; i++) {
    student.studentMarks = 5;
}

console.group('Поставлено 3 оцінки 5');

console.log('student.studentMarks: ' + student.studentMarks);
console.log('student.getAverageMark(): ' + student.getAverageMark());

console.groupEnd();

student.dismiss();

console.group('Студента виключено!');

console.log('student.studentMarks: ' + student.studentMarks);
console.log('student.getAverageMark(): ' + student.getAverageMark());

console.groupEnd();

student.recover();

console.group('Студента поновлено!');

console.log('student.studentMarks: ' + student.studentMarks);
console.log('student.getAverageMark(): ' + student.getAverageMark());

console.groupEnd();

console.groupEnd();

// ботаник

console.group('Студент ботанік на бюджеті');

const nerd = new BudgetStudent('Вищої Школи Психотерапії м.Одеса', 2, 'Альберт Енштейн');

for (let i = 0; i < 3; i++) {
    nerd.studentMarks = 5;
}

console.group('Поставлено 3 оцінки 5');

console.log('student.studentMarks: ' + nerd.studentMarks);
console.log('student.getAverageMark(): ' + nerd.getAverageMark());

console.groupEnd();
console.groupEnd();



