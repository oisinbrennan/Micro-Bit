input.onButtonPressed(Button.A, () => {
    basic.showNumber(input.compassHeading())
    if (input.compassHeading() <= 45) {
        basic.pause(150)
        images.createImage(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `).showImage(0)
        basic.clearScreen()
    } else {
        if (input.compassHeading() <= 135) {
            basic.pause(100)
            images.createImage(`
                # # # # #
                # . . . .
                # # # . .
                # . . . .
                # # # # #
                `).showImage(0)
            basic.clearScreen()
        } else {
            if (input.compassHeading() <= 225) {
                basic.pause(150)
                images.createImage(`
                    . # # # #
                    # . . . .
                    . # # # .
                    . . . . #
                    # # # # .
                    `).showImage(0)
                basic.clearScreen()
            } else {
                if (input.compassHeading() <= 315) {
                    basic.pause(150)
                    images.createImage(`
                        # . . . #
                        # . . . #
                        # . # . #
                        . # . # .
                        . # . # .
                        `).showImage(0)
                    basic.clearScreen()
                } else {
                    images.createImage(`
                        # . . . #
                        # # . . #
                        # . # . #
                        # . . # #
                        # . . . #
                        `).showImage(0)
                    basic.clearScreen()
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, () => {
    basic.showNumber(input.temperature())
    basic.pause(100)
    basic.showLeds(`
        # . # # #
        . # . . .
        . # . . .
        . # . . .
        . . # # #
        `)
    basic.pause(3000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
