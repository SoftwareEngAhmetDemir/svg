let nums = [10, 9, 2, 5, 3, 7, 101, 18];
var d = [];
let t = []
for (let i = 0; i < nums.length; i++) {
    t.length = 0;
    for (let j = 0; j < nums.length + 1; j++) {
        t.push(1);
    }
    d.push(t);
}
// d[0][0]=4;
for(let i=0 ; i < nums.length;i++){
for(let j= 0 ; j<nums.length+1 ;j++ ){
    if(i>j){
        if(nums[i]<nums[j]&&nums[j]>nums[j-1]){
            d[i][j] = d[i][j-1];
        }
        else if(nums[i]<nums[j]&&nums[j]<nums[j-1]){
            d[i][j] = d[i][j-1];
        }
    }
}
}

console.log(d)