# Adding icons to the FoxOS desktop

## Steps to add icons to the FoxOS desktop

- Create the icons
- Load the icons while starting the desktop
- Render the icons
- Open the program if the user clicks on the icon

## Issues i had to solve

![wrong format](/blog/foxos_desktop_icon_wrong_format.png)

There was 1 issue which i had to solve: The icon load failed every time for no reason. The image editor i used [luna pain](https://marketplace.visualstudio.com/items?itemName=Tyriar.luna-paint), said that the images were a valid BMP file, but the icons actually weren't. They were a PNG file. This was a huge problem, because the desktop was expecting a BMP file.
  
### Solution

I saved the image as a PNG file and then converted it to a BMP file using this Makefile:

```makefile
rwildcard=$(foreach d,$(wildcard $(1:=/*)),$(call rwildcard,$d,$2) $(filter $(subst *,%,$2),$d))

INP = $(call rwildcard,./,*.png)
OUT = $(patsubst %.png, %.bmp, $(INP))

all: $(OUT)

%.bmp: %.png
    @echo "CONV $^"
    @convert $^ -depth 24 BMP3:$@
```

## A dirty hack

I currently launch programs using a dirty hack. The hack works like this:

- Write `<program_name>` to `<root_fs>/<program_name>.fsh`
- Run `terminal <program_name>.fsh`

This should be replaced with a proper launcher eventually. But this is a task for future me.

## Where does the desktop load the icons from?

The desktop loads the icons from the `<root_fs>/FOXCFG` folder. The icons need to be named `<program_name>.bmp`.

## The final result

The final result looks like this:

![final result](/blog/foxos_desktop_icon_result.png)

The icons from top to bottom are:

- window_test
- matrix

Take a look at the code over at [github](https://github.com/TheUltimateFoxOS/FoxOS-programs/tree/8b23b818f992886cf56d194d75c52359d1847dda/foxde)

