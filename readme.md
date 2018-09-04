
# React (Native) Workshop

Wir werden mit [React](https://reactjs.org/) eine kleine mobile App bauen.
Dazu benötigen wir [React Native](https://facebook.github.io/react-native/), [Android Studio]() und noch ein paar kleinere Tools!

<b>Bitte befolgt die Anweisungen genau und konfiguriert keine zusätzlichen Tools, die hier nicht aufgeführt sind!</b>
<b>Wir werden gemeinsam React (Native) und ein erstes Projekt einrichten!</b>
<b>Abweichungen oder weiterführende Arbeiten können Euch den Workshop versauen</b>

Mein Plan für unseren kleinen Workshop ist folgender:
* Einführung zu React (Native) und den zugehörigen Konzepten
* Aufsetzen von React (Native)
* Erstellen eines interaktiven "Hello Workshop"-Projekts für Android/iOS
* Erstellen einer dynamischen Wetterabfrage auf Android und iOS mit der GPS-Funktion des mobilen Geräts.

Je nach Betriebssystem Eures Entwicklungsrechners geht es dann hier weiter:

[Windows Preparation](#windows)

[MacOS Preparation](#macos)

[Linux Preparation](#linux)

---

<a name="windows"></a>
# Windows Preparation

## Install nodeJS
See https://nodejs.org/en/download/
Test NodeJS installation, open a console and enter `npm -v` it should respond a number larger or equal than:
```
6.4.1
```

## Install Android Studio
* Siehe https://developer.android.com/studio/install#windows
* Nach dem Herunterladen, die Standart-installation durchführen.
* Android Studio starten und testen ob es startet.

### Setup Android adb
It is very handy to have the `adb` command working in your console!
You must add the folder which contains `adb.exe` to your path!
Google will help you here :)

## VS Code
* Siehe https://code.visualstudio.com/
* Anschliessend testen ob sich VSCode starten lässt

---

<a name="macos"></a>
# MacOS Preparation

## Install homebrew
* open a console and run
    ```shell
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```
* then
  ```shell
  brew update
  ```

## Install nodeJS

* open a console and run
    ```shell
    brew install node
    ```
* Test NodeJS installation, open a console and enter `npm -v` it should respond a number larger or equal than:
    ```
    6.4.1
    ```

## Android Studio or XCode
If you prefere Android Studio or XCode - install one or both just as you like!
The iOS emulator is running much better than the Android emulator!
*But you must install one of them*

### [Optional] Install Android Studio

* Siehe https://developer.android.com/studio/install#mac
* Nach dem Herunterladen, die Default-Installation durchführen.
* Android Studio starten und testen ob es startet.

#### [Only for Android Studio] Setup Android adb
It is very handy to have the `adb` command working in your console!
You must export the folder which contains `adb` to your path!
Google will help you here :)

### [Optional] Install XCode
* Open the `App Store`
* Find `XCode` and install it!

## VS Code
* Siehe https://code.visualstudio.com/
* Anschliessend testen ob sich VSCode starten lässt

---

<a name="linux"></a>
# Linux Preparation

## Install nodeJS
* Checkout this link [Installing Node.js](https://nodejs.org/en/download/package-manager/)
* Test NodeJS installation, open a console and enter `npm -v` it should respond a number larger or equal than:
    ```
    6.4.1
    ```

## Install Android Studio
* Siehe https://developer.android.com/studio/install#linux
* Nach dem Herunterladen, die Standart-installation durchführen.
* Android Studio starten und testen ob es startet.

### Setup Android adb
It is very handy to have the `adb` command working in your console!
You must export the folder which contains `adb` to your path!
Google will help you here :)


## VS Code
* Siehe https://code.visualstudio.com/, mehr infos finden sich auch unter https://code.visualstudio.com/docs/setup/linux
* Anschliessend testen ob sich VSCode starten lässt