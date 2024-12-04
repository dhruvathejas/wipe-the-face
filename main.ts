/**
 * Wipe the logo blow away the face
 */
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 15; index++) {
        COL = randint(0, 5)
        ROW = randint(0, 5)
        if (led.point(COL, ROW)) {
            led.unplot(COL, ROW)
            led.plot(COL + 1, ROW)
        }
    }
})
let ROW = 0
let COL = 0
basic.showIcon(IconNames.Happy)
