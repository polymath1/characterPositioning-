function countLetters(inputStr) {
    var inputStr = inputStr.replace(/\s/g, '');
    var objects = {};
    for (var i = 0; i < inputStr.length; i++) {
       var currChar = inputStr[i];

    if (objects[currChar]) {
objects[currChar].push(i)  /* this function pushes the position in the array */
    } else {
        objects[currChar] = [i];
    }

}
    return objects
}

console.log(countLetters("lighthouse in the house"))
