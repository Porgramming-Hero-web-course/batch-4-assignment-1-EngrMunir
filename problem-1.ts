{
    const sumArray=(num1:number[]):number=>{
        let sum:number =0;
        for(let e of num1){
            sum=sum+e;
        }
        return sum;
    }

    console.log(sumArray([1, 2, 3, 4, 5]))
}