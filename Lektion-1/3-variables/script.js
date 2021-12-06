/*
Variabler

Variabel = någonting vi lagrar information i

camelCase   =   Javascript, Java, c, c++
Pascal      =   C#, Pascal
_private    =   en variabel som bara lever inom en viss del    

    ex. firstName lastName, email, postalCode, city 

    _firstName  =   'Jonis'

*/


firstName = 'Jonis';     // global deklarering (Gör inte såhär)
var firstName = 'Jonis'; // global deklarering (Gör inte såhär)


let lastName = 'efternamn' // Lokal deklarering (gör såhär!)
lastName = 'Bergman'

const pi = 3.14;

let maths = pi + pi;

console.log(firstName);
console.log(lastName);
console.log(pi);
console.log(maths);

/* 
Deklarera variabler 
----------------------------------------------------------------

var = global variabel - accessbar överallt i koden
let = lokal variabel  - accessbar inom det angivna området
const = konstant - kan inte skrivas över (undantag finns)

C# exempel
string name = "Jonis";
int age = 33;

JS exempel.
let name = 'Jonis'
let age = 33;



*/