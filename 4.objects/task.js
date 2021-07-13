function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age
}

const student1 = new Student("Алексей", "мужской", "24");
const student2 = new Student("Алёна", "женский", "23");

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
    this.marks.push(mark)
  } else {
    this.marks.push(mark)
  }
}

Student.prototype.addMarks = function (...mark) {
  this.marks = mark;
}

Student.prototype.getAverage = function () {
  return this.marks.reduce(function (sum, current) {
    return sum + current;
  }, 0) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this['marks', 'subject'];
  this.excluded = reason;
}
