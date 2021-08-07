const body = document.body

export const bgObj = {
    bgRandomNum : Math.floor(Math.random() * 10) + 1,
    changeBg() {
        body.style.backgroundImage = `url(../img/cat${this.bgRandomNum}.jpg)`
        console.log(body);
    },
}