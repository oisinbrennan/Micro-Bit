input.onButtonPressed(Button.A, () => {
    basic.showNumber(input.compassHeading())
    if (input.compassHeading() <= 135) {
        basic.pause(100)
        images.createImage(`
            # # # # #
            # . . . .
            # # # . .
            # . . . .
            # # # # #
            `).showImage(0)
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
            } else {
                if (input.compassHeading() <= 360) {
                    basic.pause(150)
                    images.createImage(`
                        # . . . #
                        # # . . #
                        # . # . #
                        # . . # #
                        # . . . #
                        `).showImage(0)
                } else {
                    if (input.compassHeading() <= 45) {
                        basic.pause(150)
                        images.createImage(`
                            # . . . #
                            # # . . #
                            # . # . #
                            # . . # #
                            # . . . #
                            `).showImage(0)
                    }
                }
            }
        }
    }
})

