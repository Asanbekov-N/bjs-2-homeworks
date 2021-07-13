function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age
}

const student1 = new Student("Алексей", "мужской", "24");
const student2= new Student("Алёна", "женский", "23");

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

// ваш код для остальных методов
