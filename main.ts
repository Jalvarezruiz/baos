input.onButtonPressed(Button.A, function () {
    ocupacion += -1
    if (ocupacion < 0) {
        ocupacion = 0
        music.playTone(330, music.beat(BeatFraction.Breve))
    }
})
input.onButtonPressed(Button.B, function () {
    ocupacion += 1
    if (ocupacion > 2) {
        ocupacion = 2
        music.playTone(330, music.beat(BeatFraction.Breve))
    }
})
let ocupacion = 0
ocupacion = 0
basic.forever(function () {
    basic.showNumber(ocupacion)
    if (ocupacion == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        music.playTone(330, music.beat(BeatFraction.Breve))
    } else {
        basic.clearScreen()
    }
})
