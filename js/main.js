let son = Number(prompt('Tovar sonini kiriting'));
let index = 1;
if (son <= 50) {
    document.write('<div class="wrap">')
    for (let index = 1; index <= son; index++) {
        document.write('<div class="tovar"><div class="rasm"><img src="../img/thumb.jpg"></div><div class="title">Iphone 13 Pro Max</div><div class="price">1110$</div></div>')
    }
    document.write('</div>')
} else {
    alert('0 dan 50 gacha son kiriting')
}