const rewire = require("rewire");




beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("1. Person Class", () => {
    it("`Person` class exists", () => {
        const solution = rewire("../index");
        const Person = solution.__get__("Person");
        expect(Person).toBeDefined();
        expect(typeof Person).toBe("function");
    });
    it("It's constructor accepts two parameters and sets the `name` and `age` properties of the class", () => {
        const solution = rewire("../index");
        const Person = solution.__get__("Person");
        const person = new Person("Fran", 25);
        expect(person.name).toBe("Fran");
    });
    it("It has a `describe()` method", () => {
        const solution = rewire("../index");
        const Person = solution.__get__("Person");
        expect(Person.prototype.describe).toBeDefined();
        expect(typeof Person.prototype.describe).toBe("function");
        expect(Person.prototype.describe.length).toBe(0);
    });
    it("`describe()` method returns a string in the specified format", () => {
        const solution = rewire("../index");
        const Person = solution.__get__("Person");
        const John = new Person("John", 25);
        expect(typeof John.describe()).toBe("string");
        expect(John.describe()).toMatch(/John,\s\d+\syears\sold\./);
    });
});
describe("2. Cylinder Class", () => {
    it("`Cylinder` Class exists and has a constructor which accepts two parameters", () => {
        const solution = rewire("../index");
        const Cylinder = solution.__get__("Cylinder");
        expect(Cylinder).toBeDefined();
        expect(typeof Cylinder).toBe("function");
        expect(Cylinder.prototype.constructor).toBeDefined();
        expect(Cylinder.prototype.constructor.length).toBe(2);
    });
    it("has a `getVolume()` method", () => {
        const solution = rewire("../index");
        const Cylinder = solution.__get__("Cylinder");
        expect(Cylinder.prototype.getVolume).toBeDefined();
        expect(typeof Cylinder.prototype.getVolume).toBe("function");
    });
    it("`getVolume()` method returns the correct result number based on height and volume passed to constructor", () => {
        const solution = rewire("../index");
        const Cylinder = solution.__get__("Cylinder");
        const cylinder = new Cylinder(7, 9);
        expect(cylinder.getVolume()).toBe("1781.2830");
    });
});
describe("3. Tick Tock", () => {
    it("`Clock` Class exists and has a constructor which accepts one parameter", () => {
        const solution = rewire("../index");
        const Clock = solution.__get__("Clock");
        expect(Clock).toBeDefined();
        expect(typeof Clock).toBe("function");
        expect(Clock.prototype.constructor).toBeDefined();
        expect(Clock.prototype.constructor.length).toBe(1);
    });
    it("has a `render()` method", () => {
        const solution = rewire("../index");
        const Clock = solution.__get__("Clock");
        expect(Clock.prototype.render).toBeDefined();
        expect(typeof Clock.prototype.render).toBe("function");
    })
    it("`start()` method return the current local time", () => {
        const solution = require("../index");
        const currentLocalTime = new Date();
        let hours = currentLocalTime.getHours();
        if (hours < 10) hours = "0" + hours;
    
        let mins = currentLocalTime.getMinutes();
        if (mins < 10) mins = "0" + mins;
    
        let secs = currentLocalTime.getSeconds();
        if (secs < 10) secs = "0" + secs;
        expect(consoleSpy).toHaveBeenCalledWith(`${hours}:${mins}:${secs}`);
    })
});
describe("4. TV Class", () => {
    it("`TV` Class exists and has a constructor which accepts 'brand' parameter", () => {
        const solution = rewire("../index");
        const TV = solution.__get__("TV");
        expect(TV).toBeDefined();
        expect(typeof TV).toBe("function");
        expect(TV.prototype.constructor).toBeDefined();
        expect(TV.prototype.constructor.length).toBe(1);
    });

    it("`channel` property Should be set to `1` by default and `volume` should be set to `50`", () => {
        const solution = rewire("../index");
        const TV = solution.__get__("TV");
        const tv = new TV("Samsung");
        expect(tv.channel).toBe(1);
        expect(tv.volume).toBe(50);
    });

    it("should have `increaseVolume`, `decreaseVolume`, `getNewChannel`, `getTVstatus` and `resetTV` methods", () => {
        const solution = rewire("../index");
        const TV = solution.__get__("TV");
        const tv = new TV("Samsung");
        expect(tv.increaseVolume).toBeDefined();
        expect(typeof tv.increaseVolume).toBe("function");
        expect(tv.decreaseVolume).toBeDefined();
        expect(typeof tv.decreaseVolume).toBe("function");
        expect(tv.getNewChannel).toBeDefined();
        expect(typeof tv.getNewChannel).toBe("function");
        expect(tv.getTVstatus).toBeDefined();
        expect(typeof tv.getTVstatus).toBe("function");
        expect(tv.resetTV).toBeDefined();
        expect(typeof tv.resetTV).toBe("function");
    });

    it("`volume` should never be below 0 and above 100", () => {
        const solution = rewire("../index");
        const TV = solution.__get__("TV");
        const tv = new TV("Samsung");
        if (tv.volume === 100) {
            expect(tv.increaseVolume()).toBe(undefined);
        }
        if (tv.volume === 0) {
            expect(tv.decreaseVolume()).toBe(undefined);
        }
    });

    it("method `getNewChannel` should set the channel randomly, TV should have only 50 Channels", () => {
        const solution = rewire("../index");
        const TV = solution.__get__("TV");
        const tv = new TV("Samsung");
        for (let i = 0; i < 50; i++) {
            tv.getNewChannel();
        }
        expect(tv.channel).toBeLessThan(51);
        expect(tv.channel).toBeGreaterThan(0);
    });
    it("`resetTV` method should reset `channel` back to `1` and `volume` back to `50`", () => {
        const solution = rewire("../index");
        const TV = solution.__get__("TV");
        const tv = new TV("Samsung");
        tv.getNewChannel(); 
        tv.increaseVolume();
        tv.resetTV();
        expect(tv.channel).toBe(1);
        expect(tv.volume).toBe(50);
    });
    it("`getTVstatus` method should return a string with info about the TV, channel and volume in the specified format", () => {
        const solution = rewire("../index");
        const TV = solution.__get__("TV");
        const tv = new TV("Samsung");
        expect(typeof tv.getTVstatus()).toBe("string");
        expect(tv.getTVstatus()).toMatch(/samsung at channel 1, volume 50/i);
    });
});
