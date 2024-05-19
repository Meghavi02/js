class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}meghavi`
    }

    set password(value){
        this._password = value
    }
}
const meghavi = new User("meghavi@gmail.com", "abc")
console.log(meghavi.password);
console.log(meghavi.email);