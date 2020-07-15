
// const cookieParser=require("cookie-parser")

const {log:l}=console;

const Person=function(name,edad) {

    let _edad=34;

    this.name=name;
    this.edad=edad;

    this.saludo=function () {
        l(`Me llamo ${name}.
        y tengo ${this.edad} años.
        Me gustaria tener ${_edad} años.`)

    }
    this.sacaEdad=function() {
        return _edad
    }


}

Person.prototype.saca=function() {
    l(this.sacaEdad())
}

const luis=new Person("Luis",46);

l(luis)

luis.saludo()
luis.saca()