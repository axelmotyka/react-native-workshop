
# React (Native) Workshop

Wir werden mit [React](https://reactjs.org/) eine kleine mobile App bauen.
Dazu benötigen wir [React Native](https://facebook.github.io/react-native/), [Android Studio]() und noch ein paar kleinere Tools!

<b>Bitte befolgt die Anweisungen genau und konfiguriert keine zusätzlichen Tools, die hier nicht aufgeführt sind!</b>
<b>Wir werden gemeinsam React (Native) und ein erstes Projekt einrichten!</b>

Mein Plan für unseren kleinen Workshop ist folgender:
* Einführung zu React (Native) und den zugehörigen Konzepten
* Aufsetzen von React (Native)
* Erstellen eines interaktiven "Hello Workshop"-Projekts für Android/iOS
* Erstellen einer dynamischen Wetterabfrage auf Android mit der GPS-Funktion des mobilen Geräts.

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

### Setup Android adb and emulator
It is very handy to have the `adb` and `emulator` command working in your console!
You must export the folder which contains `adb` and `emulator` to your path!
Google will help you here :)
You can check if `adb` is running by entering the following command in your home directory:
```shell
adb version
```
should respond with
```shell
Android Debug Bridge version 1.0.40
Version 4986621
Installed as /Users/axelmotyka/Library/Android/sdk/platform-tools/adb
```
You can check if `emulator` is running by entering the following command in your home directory:
```shell
emulator -list-avds
```
there must be a device - <b>otherwise send me an email!</b>
```shell
Pixel_2_XL_API_19
Pixel_2_XL_API_27
```

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

## Install Android Studio

* Siehe https://developer.android.com/studio/install#mac
* Nach dem Herunterladen, die Default-Installation durchführen.
* Android Studio starten und testen ob es startet.

### Setup Android adb and emulator
It is very handy to have the `adb` and `emulator` command working in your console!
You must export the folder which contains `adb` and `emulator` to your path!
Google will help you here :)
You can check if `adb` is running by entering the following command in your home directory:
```shell
adb version
```
should respond with
```shell
Android Debug Bridge version 1.0.40
Version 4986621
Installed as /Users/axelmotyka/Library/Android/sdk/platform-tools/adb
```
You can check if `emulator` is running by entering the following command in your home directory:
```shell
emulator -list-avds
```
there must be a device - <b>otherwise send me an email!</b>
```shell
Pixel_2_XL_API_19
Pixel_2_XL_API_27
```

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
* 

### Setup Android adb and emulator
It is very handy to have the `adb` and `emulator` command working in your console!
You must export the folder which contains `adb` and `emulator` to your path!
Google will help you here :)
You can check if `adb` is running by entering the following command in your home directory:
```shell
adb version
```
should respond with
```shell
Android Debug Bridge version 1.0.40
Version 4986621
Installed as /Users/axelmotyka/Library/Android/sdk/platform-tools/adb
```
You can check if `emulator` is running by entering the following command in your home directory:
```shell
emulator -list-avds
```
there must be a device - <b>otherwise send me an email!</b>
```shell
Pixel_2_XL_API_19
Pixel_2_XL_API_27
```
## VS Code
* Siehe https://code.visualstudio.com/, mehr infos finden sich auch unter https://code.visualstudio.com/docs/setup/linux
* Anschliessend testen ob sich VSCode starten lässt