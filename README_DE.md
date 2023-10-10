# Stilvoll
 
#### 1. Klasse Person
* Erstelle eine Klasse namens `Person`, deren Konstruktor den Namen einer Person als String und ihr Alter als Zahl akzeptiert.
* Die Klasse `Person` sollte die Eigenschaften `name` und `age` haben.
* Die Klasse `Person` sollte eine Methode namens `describe` haben, die einen String im folgenden Format zurückgibt: "[Name], [Alter] Jahre alt". Wenn John also zum Beispiel 19 Jahre alt ist, gibt die Methode `describe` seiner Instanz "John, 19 Jahre alt" zurück.

#### 2. Band
* Erstelle eine Klasse namens `Cylinder`, deren Konstruktor eine Höhenangabe und eine Radiusangabe akzeptiert.
* Füge der Klasse eine Methode namens `getVolume` hinzu, die das Volumen des Zylinders basierend auf Höhe und Radius zurückgibt.

* **Hinweis**: Volumen eines Zylinders: `V = πr^2h` - r ist der Radius und h ist die Höhe des Zylinders.

#### 3. Tick Tock
Schreibe den folgenden Code so um, dass er die "class"-Syntax verwendet. Der Name der Klasse sollte `Clock` bleiben.
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
#### 4. TV-Klasse
* Erstelle eine Klasse namens `TV` mit den Eigenschaften `brand`, `channel` und `volume`.
* Gib `brand` als Konstruktorparameter an.
* Der Wert von `channel` sollte standardmäßig `1` sein. Der Wert von `volume` sollte standardmäßig `50` sein.
* Füge die Methoden `increaseVolume` und `decreaseVolume` hinzu. Das Volumen kann nicht unter 0 oder über 100 liegen.
* Füge eine Methode `getNewChannel` hinzu, um den Kanal zufällig zu setzen. Nehmen wir an, der Fernseher hat nur 50 Kanäle.
* Füge eine Methode `resetTV` hinzu, um den Fernseher wieder auf Kanal 1 und Lautstärke 50 zurückzusetzen.
* Füge eine Methode `getTVstatus` hinzu, die Informationen über den Status des Fernsehers im Format zurückgibt: "Panasonic auf Kanal 8, Lautstärke 75".
