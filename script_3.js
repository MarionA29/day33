let number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let i = 1
let n = number
let line = ''

while (i-1 < number)
{
line = ' '.repeat(n) + '#'.repeat(i)
i ++
n --
console.log(line)
}
