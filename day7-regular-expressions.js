

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */

    let re = new RegExp(/^([aeiou]).*\1$/);
       return re;
       
       
    /*
     * Do not remove the return statement
     */
    return re;
}

function test(re)
{
    if (re[0] == re.match(/[aeoiu]/)  && re[length] == re.match(/[aeoiu]/))
    {
        re = true;
    } 
    else
    {
        re = false;
    }
    return re;
}

