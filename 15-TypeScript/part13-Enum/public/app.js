"use strict";
// Enums
var resourceType;
(function (resourceType) {
    resourceType[resourceType["AUTO"] = 0] = "AUTO";
    resourceType[resourceType["PERSON"] = 1] = "PERSON";
    resourceType[resourceType["FILM"] = 2] = "FILM";
    resourceType[resourceType["BOOK"] = 3] = "BOOK";
})(resourceType || (resourceType = {}));
const docThree = {
    uid: 30001,
    resourceType: resourceType.PERSON,
    data: { name: 'Sarah' }
};
const docFour = {
    uid: 40001,
    resourceType: resourceType.BOOK,
    data: { title: 'Coding is cool' }
};
console.log(docThree, docFour);
