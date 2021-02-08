//1 Counting Sheep
function sheepCounter(num) {
  if (num === 0) {
    return console.log('All sheep jumped over the fence')
  }
console.log(num + ': Another sheep jumps over the fence');
num--;
return sheepCounter(num)
}

//sheepCounter(3)

//2 Power Calculator
function powerCalculator(base, exp) {    
if(exp < 0) {
  return console.log('exponent should be >=0')
}
if(exp === 0) {
  return 1
}
else{
  return base * powerCalculator(base, exp-1)
}
}

//console.log(powerCalculator(4,3))

//3 Reverse String
function stringReverse(string) {
if(string === ""){
  return "";
}
else{
  return stringReverse(string.substr(1)) + string.charAt(0);
}
}

//console.log(stringReverse("Kaitlyn"))

//4 nth Triangular Number
function triangularNum(n) {
if(n === 0){
  return 0;
}
else {
  return n + triangularNum(n-1);
}
}

//console.log(triangularNum(9))

//5 String Splitter
function stringSplitter(str, seperator){
let split = []
if(!str.includes(seperator)){
  return [str]
}
else{
  let index = str.indexOf(seperator)
  split = [str.slice(0, index),...stringSplitter(str.slice(index + 1), seperator)]
  return split
}
}

//console.log(stringSplitter("02/20/2020", "/"))

//6 Fibonacci
function fibonacci(n) {
if (n === 1){
  return 1;
}
if(n === 2){
  return 1;
}
return fibonacci(n -1 ) + fibonacci(n - 2)
}

//console.log(fibonacci(3))

//7 Factorial
function factorial(n) {
if (n <= 0) {
  return 'value must be greater than 0'
}
if (n === 1) {
  return 1;
}
return n * factorial(n-1);
}

//console.log(factorial(5))

//8 Find a way out of the maze
function mazeSolver(maze, row, col){
if(maze[row][col] === 'e') {
  return '';
}
//right
if(maze[row][col+1] === ' ' || maze[row][col+1] === 'e') {
  return 'R' + mazeSolver(maze, row, col+1)
}
//down
if(maze[row+1][col] === ' ' || maze[row+1][col] === 'e') {
  return 'D' + mazeSolver(maze, row+1, col)
}
//left
if(maze[row][col-1] === ' ' || maze[row][col-1] === 'e') {
  return 'L' + mazeSolver(maze, row, col-1)
}
//up
if(maze[row-1][col] === ' ' || maze[row-1][col] === 'e') {
  return 'U' + mazeSolver(maze, row-1, col)
}
}

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

//console.log(mazeSolver(mySmallMaze, 0, 0))

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

//console.log(mazeSolver(maze, 0, 0))

//9 Find all the ways out of the maze

//10 Anagrams
function anagrams(str) {
if (str.length === 1) {
  return str
}

}

//console.log(anagrams('dog'))

//11 Organization Chart 

//12 Binary Representation