// CODE here for your Lambda Classes

class Persona {
    constructor(persData){
        this.name = persData.name;
        this.age = persData.age;
        this.location = persData.location;
        

    }

    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Persona {
    constructor(persData){
        super(persData);
        this.specialty = persData.specialty;
        this.favLanguage = persData.favLanguage;
        this.catchPhrase = persData.catchPhrase;

    }

    demo (subject){
        this.subject = subject;
        return `Today we are learning about ${this.subject}`

    }

    grade(studentObj, subject) {
        this.studentObj = studentObj;
        this.subject = subject;
        this.grade = Math.random() + studentObj.grade;
        return `${this.studentObj.name} receives a perfect score on ${this.subject} with a grade of ${this.grade}`

    }

}


class Student extends Persona {
    constructor(persData) {
        super(persData);
        this.previousBackground = persData.previousBackground;
        this.className = persData.className;
        this.favSubjects = persData.favSubjects;
        this.grade = persData.grade;
        this.graduate = persData.graduate;
    }

    listSubjects () {

        return `These are my favourite subjects ${this.favSubjects}`;
    }

    PRAssignments (subject) {
            this.subject = subject;
         return `${this.name} has submitted a PR for ${this.subject}`   


    }

    sprintChallenge (subject) {
            this.subject =subject;
        return `${this.name} has begun sprint challenge for ${this.subject}`

    }
    graduation () {
        
            if (this.grade > 70) {
                    this.graduate = true;
                return `${this.name} can graduate,the grade is ${this.grade}`;
            }
            else {
                this.graduate = false;
                return `${this.name} can't graduate, the grade is ${this.grade}`;

            }

    }
    
}


class Projectmanager extends Instructor {
    constructor(persData) {
        super(persData);
        this.gradClassName = persData.gradClassName;
        this.favInstructor = persData.favInstructor;
    }
    standUp(channel) {
        this.channel = channel;
        return `${this.name} announces ${this.channel}, @channel standy times!`

    }
    debugsCode(studentObj,subject) {
        this.studentObj = studentObj;
        this.subject = subject;
        return `${this.name} debugs ${this.studentObj.name}'s code on ${this.subject}`

    }
}
            // Projectmanager objects
const mkubwa = new Projectmanager({
    name: 'Mkubwa',
    location: 'Kisii',
    age: 35,
    gradClassName: 'CS1',
    favInstructor: 'Gabe',
    
   
  });

  const mdogo = new Projectmanager({
    name: 'Mdogo',
    location: 'Limuru',
    age: 37,
    gradClassName: 'CS3',
    favInstructor: 'Ryan',
   
  });

            //Persona objects 
const ogola = new Persona ({
    name: 'Ogola',
    location: 'Bedrock',
    age: 37,
    
  });

  const amina = new Persona ({
    name: 'Amina',
    location: 'Mombasa',
    age: 27,
  });

        //Student objects
  const akili = new Student({
    name: 'Akili',
    location: 'Nairobi',
    age: 22,
    previousBackground: 'Marketing',
    className: 'Full Web',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 20,
    graduate: false,
  });

  const mwenza = new Student({
    name: 'Mwenza',
    location: 'Eldoret',
    age: 45,
    previousBackground: 'Finance',
    className: 'IOS',
    favSubjects: ['Html5', 'LESS', 'Python'],
    grade: 80,
    graduate: false,

  });

            //Instructor objects

  const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
  });

  const mwalimu = new Instructor({
    name: 'Mwalimu',
    location: 'Kisumu',
    age: 47,
    favLanguage: 'Python',
    specialty: 'Backend',
    catchPhrase: `Sasawa`,
  });

            //outputs

  console.log(ogola.speak());       //Hello my name is Ogola, I am from Bedrock
  console.log(amina.speak());       //Hello my name is Amina, I am from Mombasa    
  console.log(fred.demo("Javascript"));    //Today we are learning about Javascript 
  console.log(mwalimu.grade(akili,"Python")); //Akili receives a perfect score on Python
  console.log(akili.listSubjects());            //These are my favourite subjects Html,CSS,JavaScript
  console.log(mwenza.PRAssignments("Python"));  //Mwenza has submitted a PR for Python
  console.log(akili.sprintChallenge("IOS"));    //Akili has begun sprint challenge for IOS
  console.log(mkubwa.standUp("webeu3"));
  console.log(mdogo.debugsCode(mwenza,"Data science"));
  console.log(akili.graduation());
  console.log(mwenza.graduation());
