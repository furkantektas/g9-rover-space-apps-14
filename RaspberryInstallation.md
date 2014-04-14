# Operating System

G9 uses Raspbian on Raspberry PI Model B. You can download it from [here](http://raspbian.org/) or [here](http://www.raspberrypi.org/downloads/).

You can write the raspbian image to your SD card with the following command:
```
$ sudo dd if=raspbianimage.img of=/dev/yoursdcard bs=1M
```
At the first boot, select expand_rootfs to use the whole SD Card. Then update raspbian:
```
$ sudo apt-get update
```

#Softwares

You should install webiopi to control GPIO ports from your browser. Installation and usage is described [here](https://code.google.com/p/webiopi/wiki/INSTALL).

To enable webiopi starting at boot:
```
$ sudo update-rc.d webiopi defaults
```


