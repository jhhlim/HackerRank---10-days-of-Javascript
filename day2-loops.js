

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var strConsonants = "";
    var strVowels = "";
    var i;

for (i in s) {
    if (s.charAt(i) == "a" || s.charAt(i) == "e" || s.charAt(i) == "i" || 
s.charAt(i) == "o" || s.charAt(i) == "u") {
        strVowels += s.charAt(i);
    }
    else {
        strConsonants += s.charAt(i);
    }
}

i = 0;
for (i in strVowels) {
    console.log(strVowels.charAt(i));
}

// console.log(strConsonants);

i = 0;
for (i in strConsonants) {
     console.log(strConsonants.charAt(i));
}


}

