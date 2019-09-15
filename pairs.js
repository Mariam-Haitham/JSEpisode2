/**************************************************************
* pairs(names):
*
* - It accepts an array of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
*
* - It returns a randomized pairing of names:
*       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
*
* - It can handle an odd number of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
*       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
*
* - It returns an empty array if it gets passed an empty array:
*       pairs([]) returns []
*
* - It returns an empty array if it gets passed nothing:
*       pairs() returns []
****************************************************************/
function pairs(names) {
  // Your code goes here
  if(!names || names.length == 0)
    return [];

  let ans = [];

  if(names.length % 2 == 0)
  {
    while(names.length > 0)
    {
        
        let random1 = names.getRandom();
        let random2 = names.getRandom();
  
        let temp = [random1, random2];
        ans.push(temp);
  
        
    }
  }
  else
  {
    
    let l = names.length - 1;

    while(l > 0)
    {
        
        let random1 = names.getRandom();
        let random2 = names.getRandom();
  
        let temp = [random1, random2];
        ans.push(temp);
  
        l = l-2;
    }

    let temp = [names.getRandom()]
    ans.push(temp)


  }
  
  return ans;
  
}

module.exports = pairs;

/**********************************************
* READ ME!!!!
*
* We've included this handy method for you.
* It will remove a random element from an array
* and return it to you.
*
* Example Usage:
*
* let numbers = [1, 2, 3, 4];
* let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
* console.log(random); // 3 (the random element)
* console.log(numbers);  // [1, 2, 4] (missing the random element)
************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random()*this.length), 1)[0];
}

console.log(pairs(['Asis', 'Hamsa', 'Fawas']));
