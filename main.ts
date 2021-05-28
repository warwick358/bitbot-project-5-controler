radio.setGroup(1)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    radio.sendValue("pitch", input.rotation(Rotation.Pitch))
    radio.sendValue("roll", input.rotation(Rotation.Roll))
})
