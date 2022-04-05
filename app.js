function makeSchool(schoolName){
    const school = {}
    school.schoolName = schoolName
    school.students = []
    school.regStudent =
        (firstName,
        lastName,
        middleName,
        stateOfOrigin,
        residentialAddress,
        prevSchName,
        prevClass,
        grade,
        position,
        matricNo) => school.students.push({
            name:{lastName,firstName, middleName}, 
            pastSchool:{prevSchName,prevClass,grade,position},
            bioData:{residentialAddress,stateOfOrigin},
            matricNo
        });
    school.getAllStudents = () => school.students;
    school.deleteSchool = (matricNo) =>{
        school.students = school.students.filter((eachStudent) => eachStudent.matricNo !== matricNo
        );
    };

    school.getStudent = (matricNo) => school.students.filter((eachStudent) => eachStudent === matricNo);

    school.updateStudent = (matricNo, newStudentInfo) =>{
        school.students = school.students.map((eachStudent) => eachStudent.matricNo === matricNo ? newStudentInfo : eachStudent
        );
    };


    return Object.seal(school);

}

const yct = new makeSchool("Yaba College Of Technology");
const futa = new makeSchool("Federal University Of Technology");
const bisi = yct.regStudent(
    "Adebayo",
    "Adebisi",
    "Zainab",
    "Lagos",
    "Ilupeju, Palmgrove",
    "Adams College",
    "ND",
    "A",
    "3ND",
    "F/ND/18/3210032"
);
const favour = yct.regStudent(
    "Ife",
    "Favour",
    "Samuel",
    "Anambra",
    "VI, Lekki",
    "Tops College",
    "ND",
    "A",
    "1ND",
    "F/ND/18/3210039"
);
const richie = futa.regStudent(
    "Eradiri",
    "Richard",
    "Pere",
    "Bayelsa",
    "Shomolu, Bariga",
    "bigtops College",
    "Bsc",
    "A",
    "2ND",
    "F/ND/18/3210050"
);
const yctStudents = yct.getAllStudents();
const futaStudents = futa.getAllStudents();
const student = yct.getStudent(bisi);

console.log(yct);
// console.log(futa);
// console.log(yctStudents);
// console.log(futaStudents);
// console.log(student);
