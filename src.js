const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', input => {
    let index = parseInt(input,10)
    let num = 2
    for(let i = 0; i < index; i++){
        num += Math.pow(2,i)
    }
    console.log(Math.pow(num,2))
    rl.close()
})