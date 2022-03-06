// Write your solution here!
const pets = ["Milo", "Otis", "Garfield"]

const append = pets.slice() //copy new pets array into append and add "Odie" to the end of array
append.push("Odie")

const prepend = pets.slice() //copy new pets array into prepend and add "Odie" to the start of array
prepend.unshift("Odie")

const removeLast = pets.slice()
removeLast.pop()

const removeFirst = pets.slice()
removeFirst.shift()