console.log(numberOne(prompt("enter a string!")));
console.log(numberTwo(prompt("Enter a number")));
console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));

/* 1 */
function numberOne (num1) {
    var final = "";
    for (var i = 0; i < num1.length; i++) {
        if (num1.charAt(i) == num1.charAt(i).toUpperCase()) {
            final += num1.charAt(i).toLowerCase();
        } else {
            final += num1.charAt(i).toUpperCase();
        }
    }
    return final;
}

/* 2 */
function numberTwo(num2) {
    num2 = num2.replace(/[^\d.-]/g, '').split("");
    var final2 = "";
    for (var i = 0; i < num2.length; i++) {
        if (num2[i] % 2 == 0 && num2[i+1] % 2 == 0) {
            final2 += num2[i] + "-"
        } else {
            final2 += num2[i]
        }
    }
    return final2;
}

/* 3 */
function last(arr, n) {
    var newArr = [];
    if (n > arr.length) {
        return arr;
    } else if (n > 1) {
        for (var i = n; i > 0; i--) {
            newArr.push(arr[i])
        }
        return newArr.reverse();
    }
    else {
        return arr[arr.length-1]
    }
}