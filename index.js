let canvas= document.getElementById('canvas');

let ctx= canvas.getContext('2d');

// moveTo
// lineTo

// ctx.moveTo(0, 0);
// ctx.lineTo(100, 100);
// ctx.lineTo(1000, 100);

// ctx.lineTo(0, 500);
// ctx.lineTo(100, 100);

// ctx.lineTo(500, 0);
// ctx.moveTo(500, 500);
// ctx.lineTo(250, 250);

// ctx.stroke();

let data= [200,300,100,150,400,200];

ctx.moveTo(50, 50);
ctx.lineTo(50, 650);

ctx.lineTo(950, 650);
ctx.moveTo(50, 650);

// ctx.lineTo(100, 550);

// ctx.lineTo(100, 650- data[0]);
// ctx.lineTo(200, 650- data[1]);
// ctx.lineTo(300, 650- data[2]);

// for loop

// let x=150;

// for(let i=0; i<data.length; i++){

//     let y= 650- data[i];

//     ctx.lineTo(x,y);
//     x=x+100;
// }
// ctx.stroke();

// forEach

let x=150;
data.forEach((value)=>{

    let y= 650- value;
    ctx.lineTo(x,y);

    ctx.fillText(value, x, y-20);
    x=x+100;

})
ctx.stroke();