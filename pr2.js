var age;
age = 50;
var name1;
name1 = 'Max';
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback;
callback = function (a) { return 100 + a; };
/*====================================*/
var anything;
anything = -20;
anything = 'Text';
anything = {};
/*====================================*/
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
/*====================================*/
var person;
person = ['Max', 21];
/*====================================*/
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
;
var page = {
    load: Status.READY
};
if (page.load === Status.LOADING) {
    console.log('Loading...');
}
if (page.load === Status.READY) {
    console.log('Ready');
}
/*====================================*/
var union;
/*====================================*/
var literal;
/*====================================*/
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
