
let name=["raushsan","neeraj",'gole','nahendar']

let student={

    name:"raushan",
class:2,
rollNumber:4



}

Object.prototype.first=function(){

    console.log('hello i ma raushsan')

}


console.log(name.first());

console.log(student)

Array.prototype.second= function()
{
    console.log('hello my name is Savitari')
}



try {
    console.log(student.second());
} catch (error) {
    console.log(error)
}
finally{
    console.log(console.log(name.second()));
}


