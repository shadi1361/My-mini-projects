


// Enums
enum resourceType{AUTO, PERSON, FILM, BOOK}

interface Resource<T> {
  uid: number;
  resourceType: resourceType;
  data: T;
}

const docThree:Resource<object>={
  uid:30001,
  resourceType:resourceType.PERSON,
  data:{name:'Sarah'}
}

const docFour:Resource<object>={
  uid:40001,
  resourceType:resourceType.BOOK,
  data:{title:'Coding is cool'}
}

console.log(docThree, docFour);
