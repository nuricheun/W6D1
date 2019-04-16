// simple myBind with no args
Function.prototype.myBindShort = function (ctxObj) {
  // return () => this.apply(ctxObj);
  const that = this;
  return function() {
    that.apply(ctxObj);
  };
};

Function.prototype.myBind = function(ctxObj, ...bindArgs) {
  const that = this; 
  return function (...callTimeArgs) {
    // console.log(bindArgs)
    // console.log(callTimeArgs)
    const allArgs = bindArgs.concat(callTimeArgs)
    that.apply(ctxObj, allArgs)
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  meow() {
    console.log(`${this.name} says meow!`);
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says.myBind(pavlov)("asdf", "asdf");
// console.log(markov.meow.apply(pavlov, []));
// console.log(markov.meow.call(pavlov, x, y, s, a));

// const curie = new Cat("Curie");
// setTimeout(curie.meow.myBind(curie), 1000);



// pavlov.says("meow", "Kush")
// markov.says.myBind(pavlov, "meow", "Kush")();

// pavlov.borrowed_says("meow", "Kush")

// function.myBind(newObj, ... other_args)