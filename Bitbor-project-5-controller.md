# Bitbor-project-5-controller

## Step 1 Set up the radio comunication
First we need to set the radio channel we want to use on our controller. We can have up to 255 different channels, so you could easily set this same project up on two separate Bit:bots for competing against each other.

Go to the "radio" tab and get the "set radio group" block and place it in the "on start" block.
Go to the "basic" tab and chose the "show icon" block use the dropdown to chose the smilet face and place the block under the "set radio group" block.

```block
radio.setGroup(1)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
```

## Step 2 Sending information

Now we need to continuously send the tilt data over radio. We can separate the tilt data into pitch (forward/backwards) and roll (side to side). In order to do this, we'll use the ​radio send value​ block with name and value pairs, so that we can recognise the values when they are received by the Bitbot.

Go to the "radio" tab and select the "radio send value" place it in the "forever" Block.
Replace "name" with "pitch" and then open the "input" tab and "more" tab get the "rotation (") picth" block and replace the "0" with it. 
we will do th same again fro the roll. You can either copy and paste then change the values to "roll" or follow the instructions below.
Go to the "radio" tab and select the "radio send value" place it in the "forever" Block.
Replace "name" with "roll" and then open the "input" tab and "more" tab get the "rotation (") picth" block and replace the "0" with it. Then change "pitch" to "roll" with the dropdown tab.

```block
radio.setGroup(1)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    radio.sendValue("pitch", input.rotation(Rotation.Pitch))
    radio.sendValue("roll", input.rotation(Rotation.Roll))
})
```
## Step 3 Download to the controller microbit.
Write this code to your controller micro:bit and put it aside. Now we are ready to program the micro:bit that sits in the Bit:bot robot.