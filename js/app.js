document.body.style.backgroundColor = 'black';

const btn = document.createElement("button");

btn.innerHTML = '<h2>1000-7<h2>'

btn.style.cssText = `
    background-color: #fff;
    border: none;
    color: black;
    text-align: center;
    position: relative;
    left: 390px;
    height: 100px;
    width: 400px;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
`

document.body.append(btn);

audio = new Audio('gul.mp3')

btn.addEventListener("click", () => {

    let count = 1000;

    function start () {
        count -= 7;
        const txt = document.createElement("h1");
        txt.style.fontSize = '50px'
        txt.style.position = 'relative';
        txt.style.left = '540px'
        txt.style.color = '#fff'
        txt.innerHTML = count;

        document.body.append(txt);
        window.scrollTo(0,document.body.scrollHeight); 
        audio.play();

        if (count <= 1) {
            clearInterval(interval);
            audio.pause();
        }
    }

    let interval =  setInterval(start, 90);
    
});