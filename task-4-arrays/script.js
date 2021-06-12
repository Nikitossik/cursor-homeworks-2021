const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1

const getPairs = (students) => {
    return [
        [students[0], students[2]],
        [students[1], students[3]],
        [students[4], students[5]],
    ];
} 

const pairs = getPairs(students);

console.log(pairs);

// 2

const setProjects = (pairs, themes) => {
    const projectPairs = [];

    for (let i = 0; i < pairs.length; i++) 
        projectPairs[i] = [pairs[i].join(' і '), themes[i]];

    return projectPairs;
}

const projectPairs = setProjects(pairs, themes);

console.log(projectPairs);

// 3

const setStudentsMarks = (students, marks) => {
    const studentsMarks = [];

    for (let i = 0; i < students.length; i++)
        studentsMarks[i] = [students[i], marks[i]];

    return studentsMarks;
}

const studentsMarks = setStudentsMarks(students, marks);

console.log(studentsMarks);

// 4

const setPairsMarks = (pairs) => {
    let pairsMarks = [...pairs];
    
    for (let i = 0; i < pairs.length; i++){
        let mark = 1 + Math.floor(Math.random() * 5);
        pairsMarks[i].push(mark); 
    }

    return pairsMarks;
}

const pairsMarks = setPairsMarks(projectPairs);

console.log(pairsMarks);


