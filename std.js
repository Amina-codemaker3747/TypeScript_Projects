const stdManagement = async () => {
    class school {
        name;
        teacher = [];
        students = [];
        addStudents(stdObj) {
            this.students.push(stdObj);
        }
        addTeacher(techObj) {
            this.teacher.push(techObj);
        }
        constructor(name) {
            this.name = name;
        }
    }
    class student {
        name;
        age;
        schoolName;
        constructor(name, age, SName) {
            this.name = name,
                this.age = age,
                this.schoolName = SName;
        }
    }
    class teacher extends student {
    }
    let school1 = new school("SPS");
    let school2 = new school("APSAC");
    let tech1 = new teacher("Muhammad Arif Siddiqi", 50, school1.name);
    let tech2 = new teacher("M.Aswand", 47, school2.name);
    let std1 = new student("Aizal", 18, school.name);
    let std2 = new student("Haram", 21, school2.name);
    let std3 = new student("Freeha", 15, school1.name);
    // teachers
    school1.addTeacher(tech1);
    school2.addTeacher(tech2);
    // students
    school1.addStudents(std1);
    school2.addStudents(std2);
    school1.addStudents(std3);
    console.log(school1);
    console.log(school2);
};
export { stdManagement };
