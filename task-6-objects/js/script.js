const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

// 1

const getSubjects = student => {
    if (!student) return 'Такого студента немає';
    let studentSubjects = Object.keys(student.subjects);
    studentSubjects = studentSubjects.map(subject =>
        subject.charAt(0).toUpperCase() + subject.slice(1).replaceAll('_', " ")
    );
    return studentSubjects;
}

// 2

const getAverageMark = student => {
    if (!student) return 'Такого студента немає';
    const studentSubjects = student.subjects;
    const allMarks = [];

    for (subject in studentSubjects) allMarks.push(...studentSubjects[subject]);

    let marksSum = allMarks.reduce((total, prev) => total + prev, 0),
        marksCount = allMarks.length;

    return +(marksSum / marksCount).toFixed(2);
}

// 3

const getStudentInfo = student => {
    if (!student) return 'Такого студента немає';
    const { course, name } = student;
    const averageMark = getAverageMark(student);
    return { course, name, averageMark };
}

// 4 

const getStudentsNames = students => students.map(student => student.name).sort();

// 5

const getBestStudent = students => {
    const maxAverage = Math.max(...students.map(student => getAverageMark(student)));
    const bestStudents = [];

    for (student of students) if (maxAverage === getAverageMark(student)) bestStudents.push(student.name);

    return bestStudents;
}

// 6

const calculateWordLetters = word => {
    if (!word) return 'Пусте слово';
    const repeats = [...word].reduce((resultObj, letter) => {
        resultObj[letter] = letter in resultObj ? resultObj[letter] : 0;
        resultObj[letter]++;
        return resultObj;
    }, {});

    return repeats;
}

// visual effects

const banner = document.querySelector('.banner');

banner.addEventListener('mousemove', function (e) {
    const { clientX, clientY } = e;
    const offsetX = -clientX * 0.1;
    const offsetY = -clientY * 0.1;
    this.style.backgroundPosition = `${offsetX}px ${offsetY}px`;
});

// func-s testing

window.addEventListener('load', function () {

    const functions = [
        getSubjects, getAverageMark, getStudentInfo,
        getStudentsNames, getBestStudent, calculateWordLetters
    ];

    const numberInputs = document.querySelectorAll('.function__input[type="number"]');
    console.log(numberInputs);

    numberInputs.forEach(input => {
        input.min = 1;
        input.max = students.length;
    });

    const handleClick = (e) => {
        const parentElement = e.target.closest('.function__inner');
        const input = parentElement.querySelector('.function__input');
        const functionResult = parentElement.querySelector('.function__result');
        const functionIndex = e.target.dataset.functionIndex;
        const functionToCall = functions[functionIndex];
        let resultValue = null;

        functionResult.classList.add('function__result--active');

        if (input) {
            const functionArg = input.type === 'number' ? students[input.value - 1] : input.value;
            resultValue = functionToCall(functionArg);
        }
        else resultValue = functionToCall(students);

        functionResult.textContent = JSON.stringify(resultValue);
    }

    const buttons = document.querySelectorAll('.function .btn');

    buttons.forEach((button, index) => {
        button.dataset.functionIndex = index;
        button.addEventListener('click', handleClick);
    });
});

