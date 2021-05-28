# Bitbor-project-5-controller

## Step 1 Set up the radio comunication
Go to the "radio" tab and get the "set radio group" block and place it in the "on start" block.
Go to the "basic" tab and chose the "show icon" block use the dropdown to chose the smilet face and place the block under the "set radio group" block.

```block
radio.setGroup(1)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
```

## Step 2 Sending information
Next we will set up the values to sent over the radio comunication.
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
Download to the controller microbit
