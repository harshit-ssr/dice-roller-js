

function diceRoller(){

    const ctn = document.getElementById("ctn");
    const numOfDice = document.getElementById("numOfDice").value;
    const resultNum = document.getElementById("resultNum");
    const resultImg = document.getElementById("resultImg");
    let values = [];
    let imgs = [];
    console.log(numOfDice);

    for(let i = 0; i < Number(numOfDice); i++){
        const x =Math.floor((Math.random() * 6)  +1);
        values.push(x);
        imgs.push(`<img src="diceImages/${x}.png" alt = "Dice ${x}"> `);
    }

    resultNum.textContent = `Dice :  ${values.join(", ")}`;
    resultImg.innerHTML = imgs.join('');
}