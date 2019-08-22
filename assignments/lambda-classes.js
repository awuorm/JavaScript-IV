// CODE here for your Lambda Classes

class Person {
    constructor(persData){
        this.name = persData.name;
        this.age = persData.age;
        this.location = persData.location;
        

    }

    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
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

    grade(studentObj,subject){
        this.studentObj = studentObj;
        this.subject = subject;
        return `${this.studentObj.name} receives a perfect score on ${this.subject}`

    }

}

class Student extends Person {
    constructor(persData) {
        super(persData);
        this.previousBackground = persData.previousBackground;
        this.className = persData.className;
        this.favSubjects = persData.favSubjects;
    }

    listSubjects () {

        return `These are my favourite subjects ${this.favSubjects}`;
    }

    PRAssignments (subject) {
            this.subject = subject;
         return `${this.name} has submitted a PR for ${this.subject}`   


    }

    sprintChallenge (subject){
            this.subject =subject;
        return `${this.name} has begun sprint challenge for ${this.subject}`

    }
}

class Projectmanager extends Instructor {
    constructor(persData) {
        super(persData);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
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