const canvas = document.querySelector('#draw');

//you do not draw on the html element but you draw on something called the context so we need to grab the context
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth; //sets width equal to device screen width
canvas.height = window.innerHeight;//sets heights equal to device screen width

ctx.strokeStyle = '#BADA55';
ctx.linejoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;

let isDrawing = false; //used to check if the cursor is pressed down or not
let lastX = 0;
let lastY = 0; //is used to set the coordinates for the cursor
let hue = 0;
let direction = true;

function draw(e){
    if(!isDrawing){ //function will not run if the mouse is not down
       return;
    }
    console.log(e)
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX, lastY);
    //Go to where the user mouse is
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    //set the last X & Y
    // lastX = e.offsetX;
    // lastY = e.offsetY;
    [lastX, lastY] = [e.offsetX, e.offsetY]//another mehtod called destructuring an array
    hue++;
    if(hue >= 360){
        hue = 0;
    }

    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        direction = !direction;
    } 

    if(direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY] //sets the starting point for the cursor
})

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)