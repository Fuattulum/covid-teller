input.onButtonPressed(Button.A, function () {
    Kunder += 1
    basic.showNumber(Kunder)
})
input.onButtonPressed(Button.B, function () {
    if (Kunder > 0) {
        Kunder += Kunder - 1
    } else {
        basic.showNumber(Kunder)
    }
})
let Kunder = 0
Kunder = 0
basic.showNumber(Kunder)
