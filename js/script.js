let i = 0;
while (i <= 10) {
    console.log(i);
    i += 1
}



for (let i = 0; i <= 20; i += 1) {
     if (i % 2 !== 0) {
         continue;
    }
    console.log(i);
    
 }


let number = 7;
for (let i = 0; i <= 10; i += 1) {
    console.log(`${number} x ${i} = ${number * i}`);
}


const n = Number(prompt("Введіть любе число до 100"));
for (let i = 0; i <= 100 ; i += 1){
    if (i >= n) {
        break;
    }
    console.log(i);
}


let o = 0;
while (i <= 20) {
    console.log(o);
    o += 1
      if (o % 3 === 0) {
          continue;
     }
}