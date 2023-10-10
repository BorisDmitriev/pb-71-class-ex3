# Classy
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


#### 1. Person Class
* Create a class named `Person` the construcror of which accepts the name of a person as a string and his/her age as a number.
* The `Person` class should have the properties `name` and `age`.
* The `Person` class should have a method named `describe` which returns a string in the following format: "[name], [age] years old". So, for example, if John is 19 years old, then the `describe` method of his instance will return "John, 19 years old".

#### 2. Volume
* Create a class named `Cylinder` the constructor of which accepts a height number and a radius number.
* Add a method named `getVolume` to the class which returns the volume of the cylinder based on height and radius. 

* **Note**: Volume of a cylinder : `V = πr^2h` - r is the radius and h is the height of the cylinder.

#### 3. Tick Tock
Rewrite the following code to use the "class" syntax. The name of the class should remain `Clock`.
```javascript
  function Clock({ template }) {
  
    function render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.start = function() {
      render();
    };

  }
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();
```
#### 4. TV Class
* Create a class named `TV` with the properties `brand`, `channel` and `volume`.
* Specify `brand` as a constructor parameter.
* The value of `channel` should be `1` by default. `volume` should be `50` by default.
* Add methods `increaseVolume` and `decreaseVolume`. Volume can't be below 0 or above 100.
* Add a method `getNewChannel` to set the channel randomly. Let's say the TV has only 50 channels.
* Add a method `resetTV` to reset the TV back to channel 1 and volume 50. 
* Add a merhod `getTVstatus` that returns info about the TV status in the format: "Panasonic at channel 8, volume 75".

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. Person Class

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `Person` class exists |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | It's constructor accepts two parameters and sets the `name` and `age` properties of the class |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | It has a `describe()` method |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | `describe()` method returns a string in the specified format |

### 2. Cylinder Class

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | `Cylinder` Class exists and has a constructor which accepts two parameters |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | has a `getVolume()` method |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | `getVolume()` method returns the correct result number based on height and volume passed to constructor |

### 3. Tick Tock

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | `Clock` Class exists and has a constructor which accepts one parameter |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | has a `render()` method |
| ![Status](../../blob/badges/.github/badges/main/status9.svg) | `start()` method return the current local time |

### 4. TV Class

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status10.svg) | `TV` Class exists and has a constructor which accepts 'brand' parameter |
| ![Status](../../blob/badges/.github/badges/main/status11.svg) | `channel` property Should be set to `1` by default and `volume` should be set to `50` |
| ![Status](../../blob/badges/.github/badges/main/status12.svg) | should have `increaseVolume`, `decreaseVolume`, `getNewChannel`, `getTVstatus` and `resetTV` methods |
| ![Status](../../blob/badges/.github/badges/main/status13.svg) | `volume` should never be below 0 and above 100 |
| ![Status](../../blob/badges/.github/badges/main/status14.svg) | method `getNewChannel` should set the channel randomly, TV should have only 50 Channels |
| ![Status](../../blob/badges/.github/badges/main/status15.svg) | `resetTV` method should reset `channel` back to `1` and `volume` back to `50` |
| ![Status](../../blob/badges/.github/badges/main/status16.svg) | `getTVstatus` method should return a string with info about the TV, channel and volume in the specified format |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-datastructure-classes)


[//]: # (autograding info end)