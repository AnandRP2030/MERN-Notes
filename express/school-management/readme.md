create a new db school-management-system

1. create schema for student, teacher and subjects

2. create apis for students
   2.1 create new student
   2.2 get all students
   2.3 get a student by id (id should pass as params)
   2.4 edit student details by id
   2.5 delete student by id

3. student fields: studentId, name, age, gender (male, female, other), class (string), email, phoneNumber, password, joiningDate (date), major (enum) (eg: business administration, computer science, psychology, accounting, music, engineering, and mathematics.)

4. Teacher fields: teacherId, name, age, subject, salary, joiningDate, gender (male, femaile, other)
5. create apis for teachers
   2.1 create new teacher (post)
   2.2 get all teachers (get)
   2.3 get a teacher by id (id should pass as params) (get)
   2.4 edit teacher details by id (patch)
   2.5 delete teacher by id (delete)

6. Create a collection for exams:
   fields are: studentId, teacherId, subject, exam date, studentExamStatus (enum: pending, pass, or failed)
