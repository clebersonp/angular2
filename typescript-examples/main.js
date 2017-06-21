var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var num = 2;
var n = "5";
n = "abc";
var numeros = [1, 2, 3, 4];
numeros.map(function (n) { return n * 2; });
var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.somar = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var variavel = "valor";
var PI = 3.1415;
var Cat = (function () {
    function Cat() {
        this.name = "Mel";
    }
    Cat.prototype.meaow = function () {
        return this.name + " say Meaowwwww!";
    };
    return Cat;
}());
var Foo = (function () {
    function Foo() {
    }
    Foo.prototype.method = function () { };
    return Foo;
}());
__decorate([
    configurable(false), enumerable(true)
], Foo.prototype, "method");
Foo = __decorate([
    frozen
], Foo);
