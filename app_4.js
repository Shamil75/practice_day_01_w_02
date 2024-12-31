let num = [];
for(let i=1; i<=50; i++){
    num.push(i);
}

let number =[];
for (let i = 0; i < num.length; i++) {
    const element = num[i];

    if(element % 3 == 0 && element % 5 ==0){
        number.push(element);
    }
    
}

console.log(number);