const palindromes = function (string) {
    let start = 0;
    let end = string.length - 1;

    while (start <= end) {
        let leftChar = string[start];
        let rightChar = string[end];

        //console.log(`left: ${leftChar} right: ${rightChar}`);
        if (!(/[a-zA-Z]/).test(leftChar)) {
            start++;
        }
        else if (!(/[a-zA-Z]/).test(rightChar)) {
            end--;
        }
        else if (leftChar.toLowerCase() == rightChar.toLowerCase()) {
            start++;
            end--;
        }
        else {
            return false;
        }
    }
    
    return true;
};

// Do not edit below this line
module.exports = palindromes;
