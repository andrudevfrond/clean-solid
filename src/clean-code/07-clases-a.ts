
// function anonima autoenvocada
(()=>{

    type Gender = 'M'|'F';

    class Person {
        
        constructor(
            public name: string, 
            public gender: Gender, 
            public birthdate: Date
        ){}
    }

    class User extends Person {

        public lastAccess : Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender:Gender,
            birthdate: Date,
        ){
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }
        checkCredential (){
            return true;
        }
    }

    class UserSettings extends User {
        
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(email, role, name, gender, birthdate);
        }
    }
    const newUserSettings = new UserSettings(
        '/urs/home',
        '/home',
        'andres@gmail.com',
        'desarrollador',
        'Andres',
        'M',new Date('1992-01-29')
    );

    // const newPerson = new Person('Andres', 'M', new Date('1992-01-29'));
    console.log({newUserSettings, areCredentialIsValid: newUserSettings.checkCredential()});
})();