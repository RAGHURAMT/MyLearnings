// https://www.typescriptlang.org/docs/handbook
// What Typescript does: static checking (It checks the code while writing the code where as javascript does it only after running the code)
//Development process:
// TS -> Compiled or converted to JS
// TS is just a layer on top of the JS. 
// TS is just a development tool
// Types in TS: number, string, boolean, null, undefined, void, object, array, tuples, any etc
//access modifiers: public, private, protected and read-only
// class constants: readonly, const and readonly static
var FirstProgram = /** @class */ (function () {
    function FirstProgram() {
    }
    FirstProgram.prototype.firstMethod = function (greetings) {
        console.log(greetings);
    };
    return FirstProgram;
}());
var fp = new FirstProgram();
fp.firstMethod("hello");
