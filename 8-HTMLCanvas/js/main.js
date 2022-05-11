const canvas = document.querySelector('#draw');

//you do not draw on the html element but you draw on something called the context so we need to grab the context
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.linejoin = ''