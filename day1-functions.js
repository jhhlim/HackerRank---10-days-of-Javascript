
/*
 * Create the function factorial here
 */
function factorial(num)
{
 if (num < 0) 
        return -1;
    
    // If the number is 0, its factorial is 1.
    else if (num == 0) 
        return 1;
        
  // Otherwise, call the recursive procedure again
    else {
        return (num * factorial(num - 1));
}
}
