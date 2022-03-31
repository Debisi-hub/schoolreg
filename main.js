class createSchool {
    constructor(schoolName) {
        this.schoolName = schoolName;
        this.students = [];
    }
    registerStudent = (newStudent) => {
        this.students.push(newStudent);
    };
    getAllStudent = () => this.students;

    getStudent = (firstName) =>
        this.students.filter((data) => {
            if (data.firstName === firstName) return data;
        });
    deleteStudent = (firstName) =>
        (this.students = this.students.filter((data) => {
            if (data.firstName !== firstName) return data;
        }));
    checkMatric = (matricNo) =>
        (this.students = this.students.filter((data) => {
            if (data.matricNo == matricNo) return data;
        }));
    updateStudent = (firstName, newLastName) => {
        this.students = this.students.map((data) =>
            data.firstName === firstName
                ? {...data, lastName: newLastName}
                : data
        );
    };
}
const yct = new createSchool("YABA COLLEGE OF TECHNOLOGY");

const bisi = {
    firstName: "Adebisi",
    lastName: "Adebayo",
    matricNo: "f/ND/18/3210032",
};
const odowgu = {
    firstName: "Favour",
    lastName: "Ife",
    matricNo: "f/ND/18/3210002",
};
const pere = {
    firstName: "Richard",
    lastName: "Eradiri",
    matricNo: "f/ND/18/3210067",
};
yct.registerStudent(odowgu);
yct.registerStudent(pere);
yct.registerStudent(bisi);
// console.log(yct.getAllStudent())
// console.log(yct.getStudent("Richard"))
// console.log(yct.deleteStudent("Adebisi"));
// console.log(yct.students);
// yct.updateStudent("Adebisi", "Adeyinka")
// console.log(yct.students)
// console.log(yct.checkMatric("f/ND/18/3210032"))
