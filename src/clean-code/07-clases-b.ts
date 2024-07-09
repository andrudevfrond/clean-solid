
// function anonima autoenvocada
(()=>{

    type Gender = 'M'|'F';

    interface PersonProps{
        birthdate : Date;
        gender    : Gender; 
        name      : string; 
    }

    class Person {
        public birthdate : Date;
        public gender    : Gender;
        public name      : string;
        
        constructor({name,gender, birthdate}: PersonProps){
            this.birthdate = birthdate;
            this.gender    = gender;
            this.name      = name;
        }
    }

    interface UserProps{
        birthdate : Date;
        email     : string;
        gender    : Gender, 
        name      : string, 
        role      : string;
    }

    class User extends Person{
        public email      : string;
        public lastAccess : Date;
        public role       : string;

        constructor({email,role, name,gender,birthdate}: UserProps){
            super({name, gender, birthdate});
            this.email      = email;
            this.lastAccess = new Date();
            this.role       = role;
        }

        checkCredential (){
            return true;
        }
    }

    interface UserSettingsProps{
        birthdate       : Date;
        email           : string;
        gender          : Gender;
        lastOpenFolder  : string;
        name            : string;
        role            : string;
        workingDirector : string;

    }

    class UserSettings extends User {

        public lastOpenFolder : string;
        public workingDirector : string;
        
        constructor({
            birthdate,
            email,
            gender,
            lastOpenFolder,
            name,
            role,
            workingDirector,
        }: UserSettingsProps){
            super({email, role, name, gender, birthdate});
            this.lastOpenFolder  = lastOpenFolder;
            this.workingDirector = workingDirector;
        }
    }
    
    const newUserSettings = new UserSettings({
        birthdate       : new Date('1992-01-29'),
        email           : 'andres@gmail.com',
        gender          : 'M',
        lastOpenFolder  : '/home',
        name            : 'Andres',
        role            : 'desarrollador',
        workingDirector : '/urs/home',
    });

    // // const newPerson = new Person('Andres', 'M', new Date('1992-01-29'));
    console.log({newUserSettings, areCredentialIsValid: newUserSettings.checkCredential()});
})();