let avg=0;
let n=0;
let sum=0;
let num=1;
while(num<=100){
  if(num%2==0){
    sum+=num;
    n++;
  }
  num++;
}
avg=sum/n;
console.log(avg);