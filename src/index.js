module.exports = function check(str, bracketsConfig) {
    let stack = [];
    if (str.length % 2 !== 0) {
        return false;
    }
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < bracketsConfig.length; j++){
            if (bracketsConfig[j][1] === str[i] && bracketsConfig[j][0] === stack[stack.length-1]){
                stack.pop();
            } else
            if (bracketsConfig[j][0] === str[i]){
                stack.push(str[i]);
            }

        }
    }
    if (stack.length === 0) return true;
    else return false;
}
