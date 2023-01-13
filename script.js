let containerTop = document.querySelector('.top');
let containerBottom = document.querySelector('.bottom');

let cardArr = [];


for (let i = 1; i <= 8; i++) {
    if (i < 5) {
        let card = document.createElement('div');
        cardArr.push(card)
        containerTop.appendChild(card)
        card.className = `card`;
        let cardStyle = card.style;
        cardStyle.height = '40vh';
        cardStyle.width = '20vw';
        cardStyle.margin = '5vh 4vw 5vh 0';
    } else {
        card = document.createElement('div');
        cardArr.push(card)
        card.className = `card`;
        containerBottom.appendChild(card);
        cardStyle = card.style;
        cardStyle.height = '40vh';
        cardStyle.width = '20vw';
        cardStyle.margin = '5vh 4vw 5vh 0';
    }


}
// console.log(cardArr);
let imgArr = [];
for(let i=0; i<8; i++){
    let pic = document.createElement('img');
    pic.className = 'cardPic';
    pic.src = `./asset/${i+1}.jpg`;
    pic.style.height = '30vh';
    pic.style.width = '16vw';
    pic.style.margin = '2vh 2vw 0 2vw'
    cardArr[i].appendChild(pic);
    imgArr.push(pic);
}

for(let i=0; i<8; i++){
    let para = document.createElement('p');
    para.className = 'chairName';
    para.textContent = `Chair ${i+1}`;
    para.style.margin = '0 0 0 2vw';
    para.style.fontWeight = 'bolder';
    cardArr[i].appendChild(para);

    let chairId = document.createElement('p');
    chairId.className = 'chairId'
    chairId.textContent = `#${Math.floor(Math.random()*100000)}`;
    cardArr[i].appendChild(chairId);
}
// console.log(imgArr);
