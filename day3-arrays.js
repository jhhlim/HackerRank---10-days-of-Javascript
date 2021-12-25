

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function

    //  var sArray = nums.sort(function (a,b){
    //     return a - b;
    // });
    // var uSarray = sArray.filter(function (elm, index, self){
    //     return index == self.indexOf(elm);
    // });
    // return uSarray[uSarray.length - 2];
    var max = Math.max.apply(null, nums);

    function delmax(num) {
     return num < max;
    }
    const nums2 = nums.filter(delmax);

    var max2 = Math.max.apply(null, nums2);
    return max2;
}

