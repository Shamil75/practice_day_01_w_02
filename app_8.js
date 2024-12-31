const monthlySavings = (array, numbers) => {
    let payment = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if(element >= 3000){
            let temp = element*0.2;
            payment.push(element - temp);
        }
        else{
            payment.push(element);
        }
        
    }
    let sum = 0;
    for (let i = 0; i < payment.length; i++) {
        sum += payment[i];
    }

    let savings = sum - numbers;
    if(!Array.isArray(array) || typeof numbers !== 'number'){
        return "Invalid input";
    }
    else if(savings < 0){
        return "Earn more";
    }
    else{
        return savings;
    }
};


const output = monthlySavings([1000,2000,2500],5000);
console.log(output);