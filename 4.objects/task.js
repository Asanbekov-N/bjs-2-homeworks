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

Student.prototype.addMark = function (mark) {
  
  if(this.marks === undefined){ 
    this.marks[0] = mark
  } else {
    this.marks.push(mark)
  }
}
// ваш код для остальных методов
student1.setSubject("Algeb")
student1.addMark(5)
student1.addMark(4)
console.log(student1)
