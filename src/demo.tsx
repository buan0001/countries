/* eslint-disable @typescript-eslint/no-unused-vars */
const numbers:Array<number> = [1,2,3]

numbers.push(4)

interface dog  {
    breed: breeds;
    name: string;
    weight: number;
}

enum breeds{
    "Golden_retriever",
    "Dansk_spids"
}

const doggies:dog[] = [{breed:breeds.Dansk_spids, name: "Nanu", weight:21.6}]

const newFren:dog = {breed:breeds.Golden_retriever, name:"Maggie", weight:30.5}

doggies.push(newFren);

doggies.push({breed:breeds.Dansk_spids, name:"a", weight:32})

function createDog(name:string, breed:breeds, weight:number):dog {
    const anotherFren = {name, breed, weight}
    return anotherFren;
}

const a = createDog("asdf",breeds.Dansk_spids,32);
