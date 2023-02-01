let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
//let img3 = document.querySelector("#abc")
let btn3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4")
let img5 = document.querySelector("#def")
let btn5 = document.querySelector(".dicegame")
let msg = document.querySelector(".mesg")

img1.addEventListener("click", () => {
    window.location.href = "./signup.html"

});
btn3.disabled = true;
img4.disabled = true;
img2.addEventListener("click", () => {
    let details = JSON.parse(localStorage.getItem("data"));
    for (let t of details) {
        let detail = document.querySelector(".details")
        let dname = document.createElement("h1")
        dname.innerHTML = `Your name :${t.Name}!!`;
        detail.appendChild(dname);

        let dusername = document.createElement("h1")
        dusername.innerHTML = `Your Username : ${t.Username}!!  Now play the ludo king..`;
        detail.appendChild(dusername);
    }

    btn3.disabled = false;
    img1.disabled = true;
    img2.disabled = true;
});


btn3.addEventListener("click", () => {
    img5.style.display = "block";
    btn3.disabled = true;
})

img5.addEventListener("click", game)
let count = 0;
let arr = [];

function game() {

    count++;
    let dicearray = [1, 2, 3, 4, 5, 6]
    let randomnumber = Math.floor(Math.random() * 6);
    let randomdice = dicearray[randomnumber]
    arr.push(randomdice)

    if (count === 3) {
        btn5.disabled = true;
        let sum = arr.reduce((x, y) => { return x + y });
        chance(sum);
    }

}

let times = 0;
function chance(t) {
    if (t > 10) {
        img4.disabled = false;

    }

    else if (t <= 10) {

        times++;
        alert('try again after scoring more than 10')

        btn5.disabled = false;
        count = 0;
        arr.splice(0, arr.length);
        if (times > 1) {
            msg.innerHTML = "BAD LUCK !!"
            btn5.disabled = true;
        }

    }
}



img4.addEventListener("click", coupon);

function coupon() {

    let digits = "1023456789";
    let couponnum = "";
    for (let i = 0; i < 12; i++) {
        let num = Math.floor(Math.random() * digits.length)
        couponnum += digits[num];
    }
    alert(`Your coupon number is: ${couponnum}`)

    congratulations();

}

function congratulations() {

    img4.disabled = true;
    let img = document.createElement("img")
    img.src = "./congratulations.gif";
    img.style.width = "300px";
    img.textAlign = "center"
    document.body.append(img);
}