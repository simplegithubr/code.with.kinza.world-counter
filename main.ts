#! /user/bin/env node 
import inquierer from "inquirer"
import chalk from "chalk"
 
console.log(chalk.bold.cyanBright("\n\t welcome to codewithkinza - world_counter"))
console.log("=".repeat(60))

const anwers:{
  sentence: string
} = await inquierer.prompt([
  {
    name: "sentence",
    type: "input",
    message: "Enter your sentence to count the world"
  }
])

const worlds = anwers.sentence.trim().split(" ")
console.log("=".repeat(60))
console.log(worlds)
 console.log(`Your sentence world count: ${worlds.length}`)