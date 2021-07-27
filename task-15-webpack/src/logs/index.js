import {
    isPalyndrom, students, marks, setStudentsMarks, replaceBadWords,
    calculateWordLetters, ukraine, getTotalTaxes, Student,
    getRandomChinese, createIdGenerator
} from '../exports';

console.log(`isPalyndrom('искать такси'): ${isPalyndrom('искать такси')}`);
console.log(`setStudentsMarks(students, marks): ${setStudentsMarks(students, marks)}`);
console.log(`replaceBadWords('Fucking piece of shit'): ${replaceBadWords('Fucking piece of shit')}`);
console.log(`calculateWordLetters('тест'): ${JSON.stringify(calculateWordLetters('искать такси'))}`);
console.log(`getTotalTaxes.call(ukraine): ${getTotalTaxes.call(ukraine)}`);

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

getRandomChinese(10).then(res => console.log(`Random chinese: ${res}`));

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);