/*#1 Object to JSON
stringify(obj)*/
let json = JSON.stringify(true);
console.log(json);

json=JSON.stringify(['apple','banana']);
console.log(json);

const rabbit={
    name:'tori',
    color:'white',
    size:null,
    birthDate:new Date(),
    symbol:Symbol('id'),
    jump:()=>{
        console.log(`${name} can jump!`);
    },
};
json=JSON.stringify(rabbit);
console.log(json);

json=JSON.stringify(rabbit,['name',"color"]);
console.log(json);

/*#2 JSON to Object
parse(json)*/
console.clear();
json=JSON.stringify(rabbit);
const obj=JSON.parse(json);
console.log(obj);

rabbit.jump();

console.log(obj.birthDate);