

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    var msg = "";
    if (a > 0)
    {
        msg = "YES";
    }
    else if (a ==0)
    {
        msg = "Zero Error";
    }
    else if (a < 0)
    {
        msg = "Negative Error";
    }
    
    return msg;
}

