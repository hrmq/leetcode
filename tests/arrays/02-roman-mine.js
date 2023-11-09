var romanToInt = function(s) {
    let dic = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
        
    } 
    let sum = 0
    
    for (let i = 0; i < s.length; i++){
        // console.log(dic[s[i]])
        // console.log(dic[s[i + 1]])
        if (dic[s[i]] < dic[s[i + 1]]){
          sum += dic[s[i + 1]] - dic[s[i]]
            i++
        }else{
            sum += dic[s[i]]
        }
        
    }
     return sum
 };