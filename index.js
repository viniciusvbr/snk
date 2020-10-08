const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = 'white';
ctx.fillRect(20,20,8,6);

class snake {
    constructor(){
        this.x = 20;
        this.y = 20;
        // ctx.fillRect(20,20,this.x,this.y);
    }
}

// let snake = new snake();


