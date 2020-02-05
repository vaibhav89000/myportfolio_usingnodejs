const db = require('../db/database');

module.exports = class User {
    constructor(firstname,lastname,email,number,comment){
        // this.id =id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.number = number;
        this.comment = comment;
    }

    save(){
        return db.execute('INSERT INTO users (firstname,lastname,email,contact,description) VALUES (?,?,?,?,?)',
        [this.firstname,this.lastname,this.email,this.number,this.comment]
        );
    }
}