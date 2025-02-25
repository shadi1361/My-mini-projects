type objectType = { name: string, age: number };

const person = (shadi: objectType) => {
    console.log(`my Name is ${shadi.name} and im ${shadi.age} years old`);
}

person({ name: "shadi", age: 20 });
person({ name: "omid", age: 30 });
