GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Down, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {
    display.showColor(GAME_ZIP64.colors(ZipLedColors.Black))
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Up, GAME_ZIP64.ZIP64ButtonEvents.Up, function () {
    glitches = 0
    display.setBrightness(20)
    display.showRainbow(1, 360)
    basic.showString("u made a glitch!")
    basic.showLeds(`
        # # . # #
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        `)
    basic.showString("why")
    glitches += 1
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("°C")
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Right, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    display.showColor(GAME_ZIP64.colors(ZipLedColors.Indigo))
    basic.showString("good job u made it break.")
    basic.showLeds(`
        # # . # #
        # . . . #
        # . . . #
        . . # . .
        . # . # .
        `)
    basic.showString("u made")
    glitches += 1
    basic.showNumber(glitches)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        . . # . .
        `)
})
let glitches = 0
let display: GAME_ZIP64.ZIP64Display = null
basic.showLeds(`
    # # # # #
    # . . . #
    # . # . #
    # . . . #
    # # # # #
    `)
display = GAME_ZIP64.createZIP64Display()
