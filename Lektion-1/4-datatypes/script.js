/* 
JavaScript Datatyper
----------------------------------------------------------

String      =   Text , 'abc', '123'
Number      =   Heltal, decimaltal
Boolean     =   True / False
null        =   Tomt, (manuellt)
undefined   =   Odefinerat, tomt (automatiskt)
object      =   ett objekt/klass innehåller ett eller flera värden
Array       =   en lista med värden, Array är av datatypen OBJECT

*/



/* strings 

let name = "Jonis";
let name = 'Jonis';    - Denna brukar vi oftast använda
let name = `Jonis`;    - Använd denna när du ska göra en template literal (placeholder) 

*/


let datatype;

console.log(typeof datatype);
datatype = 'en text';
console.log(typeof datatype);
datatype = 3;
console.log(typeof datatype);
datatype = true;
console.log(typeof datatype);
datatype = {};
console.log(typeof datatype);
datatype = [];
console.log(typeof datatype);
datatype = null;
console.log(typeof datatype);






let text = "Jag är \"bäst\" i 'hela' världen";
text = 'Jag är "bäst" i \'hela\' världen';
text = `jag är "bäst" i 'hela' världen`;

let name = 'Jonis';
let age = "33";

text = 'Jag heter ' + name + ' och jag är ' + age + ' år gammal.';
text = "Jag heter " + name + " och jag är " + age + " år gammal.";
text =  `Jag heter ${name} och jag är ${age} år gammal.`;


// console.log(text)

let myName = 'Jonis Bergman';


// console.log(text.length);
// console.log(text[0]);
// console.log(text.indexOf('e'));

// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// console.log(myName.split(' '));

let names = myName.split(' ');
// console.log(names)
let firsName = names[0]
let lastName = names[1]

let text2 =`    Mitt förnamn är ${firsName} och efternamnet är ${lastName}.     `;
// console.log(text2)
document.body.innerText = `Hej ${firsName}, Välkommen tillbaka!`;

// console.log(text2.trim());


