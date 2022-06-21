

let age: number;
age = 50;

let name1:string;
    name1 = 'Max';
    
let toggle:boolean;    
toggle = true;

let empty:null;
empty = null;

let notInitialize:undefined;
notInitialize = undefined;

let callback:Function;
callback = (a) => { return 100 + a };

/*====================================*/    
let anything:any;
anything = -20;
anything = 'Text';
anything = {};

/*====================================*/
let some:unknown;
some = 'Text';

let str: string;
if (typeof some === 'string') {
    str = some;
}

/*====================================*/
let person:[string, number];
    person = ['Max', 21];
/*====================================*/

enum Status{ LOADING, READY };
const page = {
    load: Status.READY,
};

if (page.load === Status.LOADING) {
    console.log('Loading...');
}
if (page.load === Status.READY) {
    console.log('Ready');
}

/*====================================*/

let union: string | number;
/*====================================*/
let literal: 'enable' | 'disable';
/*====================================*/


function showMessage(message): void {
  console.log(message);
}


function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}
/*====================================*/

type DataBase = {
    title: string,
    likes: number,
    accounts: string[],
    status: 'open' | 'close',
    details?: {
        createAt: Date,
        updateAt: Date,
    }
}


const page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}