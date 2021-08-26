var readlinesync=require("readline-sync")

// var students=[];

  var student={
    name:[],
    total:[]
  };
  


for(let i=0;i<2;i++){
      student.name[i]=readlinesync.question("what is your name?")
      var que2=readlinesync.questionInt("what is your testMarks?")
      var que3=readlinesync.questionInt("what is your preFinalMarks?")
      var que4=readlinesync.questionInt("what is your finalMarks?")
      student.total[i]=que2+que3+que4;
}

let highestMarks=Math.max(...student.total);
let totalMarks=student.total.reduce((a,b)=>a+b);
let avgMarks=totalMarks/5;
let studentHighestMarks=student.total.indexOf(highestMarks);

console.table(student);
console.log(`the ${student.name[studentHighestMarks]} has highestMarks of ${highestMarks}`)
console.log(`avg marks are ${avgMarks}`)





