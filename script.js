const arr = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, elem) {
    arr.forEach(item => {
        if (item == elem) {
            arr.splice(arr.indexOf(elem), 1);
        }
    })
    return arr;
}

console.log(removeElement(arr, 5));