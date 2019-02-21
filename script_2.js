let number = prompt('De quel nombre veut tu calculer la factorielle ?');
let result = 1;
while (number > 1)
{
  result = result*number;
  number --;
}
console.log(result);
