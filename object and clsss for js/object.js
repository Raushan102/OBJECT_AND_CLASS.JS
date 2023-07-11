try {
  console.log(raushank);
  console.log("hello ia m raushann");
} catch {
  console.log("error is handled");
} finally {
  console.log("i am finally function");
}

class person {
  name;
  typeOFPerson;
  id;

  constructor(n, type, id) {
    this.name = n;
    this.typeOFPerson = type;
    this.id = id;
  }
}

let object = new person("raushan", "good", 35);
console.log(object);

function first(n, type, id) {
  this.name = n;
  this.typeOFPerson = type;
  this.id = id;
}

let object2 = new first("Raja", "good", 48);

console.log(object2);
