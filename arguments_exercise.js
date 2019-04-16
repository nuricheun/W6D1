
function sum (...arguments) {
    let sum = 0;
    arguments.forEach(el => {
        sum += el
    });
    console.log(sum) 
}






// simple myBind with no args
Function.prototype.myBindShort = function (ctxObj) {
    // return () => this.apply(ctxObj);
    const that = this;
    return function () {
        that.apply(ctxObj);
    };
};

Function.prototype.myBind = function (ctxObj, ...bindArgs) {
    const that = this;
    return function (...callTimeArgs) {
        // console.log(bindArgs)
        // console.log(callTimeArgs)
        const allArgs = bindArgs.concat(callTimeArgs)
        that.apply(ctxObj, allArgs)
    }
}


