
// function anonima autoenvocada
// aplicando el principio de responsabilidad unica
// Priorizar la composicion frente a la herencia

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
        email     : string;
        role      : string;
    }

    class User {
        public email      : string;
        public lastAccess : Date;
        public role       : string;

        constructor({email,role}: UserProps){
            this.email      = email;
            this.lastAccess = new Date();
            this.role       = role;
        }

        checkCredential (){
            return true;
        }
    }

    interface SettingsProps{
        lastOpenFolder  : string;
        workingDirector : string;
    }

    class Settings {

        public lastOpenFolder  : string;
        public workingDirector : string;
        
        constructor({
            lastOpenFolder,
            workingDirector,
        }: SettingsProps){
            this.lastOpenFolder  = lastOpenFolder;
            this.workingDirector = workingDirector;
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

    class UserSettings {
        public person   : Person;
        public settings : Settings;
        public user     : User;

        constructor({birthdate, email, gender, lastOpenFolder, name, role, workingDirector}: UserSettingsProps){
            this.person   = new Person( name, gender, birthdate);
            this.user     = new User(email, role);
            this.settings = new Settings(lastOpenFolder, workingDirector);

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
    console.log({newUserSettings});
})();