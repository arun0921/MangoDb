// console.log("Hello")
// console.log("number:",10)
// console.log(global)

// console.log(process.argv)

// create files
let fs = require("fs")
let quote= "be carm"
fs.writeFile("./awesome.html",quote,(err)=>{
    console.log("completed")
})

// delete files
let fs = require("fs")
let quote2= "be carm"
fs.unlink("./",quote,(err)=>{
    console.log("completed")
})