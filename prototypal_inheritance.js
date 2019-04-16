// Function.prototype.inherits1 = function (BaseClass) {
//     function Surrogate() { }
//     Surrogate.prototype = BaseClass.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.constructor = this;
// };

Function.prototype.inherits = function(SuperClass){
    function Surrogate(){};
    Surrogate.prototype = SuperClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}


function MovingObject() { 
}

MovingObject.prototype.move = function(){
    return "We moved!";
}


function Ship() { }

Ship.inherits(MovingObject);

function Asteroid() { }

Asteroid.inherits(MovingObject);




const ship5 = new Ship();
const ast5 = new Asteroid();
console.log(ship5.move());
ast5.move();




