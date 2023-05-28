input.onPinPressed(TouchPin.P0, function () {
    music.playTone(349, music.beat(BeatFraction.Half))
})
input.onPinPressed(TouchPin.P2, function () {
    music.playTone(440, music.beat(BeatFraction.Half))
})
input.onPinPressed(TouchPin.P1, function () {
    music.playTone(392, music.beat(BeatFraction.Half))
})
