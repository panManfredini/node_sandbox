//import _ from 'lodash';

function component( greetings : string) {
  let element = document.createElement('div');

  //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = 'Hello World! <br> ' + greetings;

  return element;
}

class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}


function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  var result = await resolveAfter2Seconds();
  console.log(result);
  document.body.appendChild(component('From Async!'));  
  // expected output: 'resolved'
}

 asyncCall();

document.body.appendChild(component('fuck your majesty...'));



