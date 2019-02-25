# Browser Extension using React

A minimal example of a browser extension using React (with Hooks!).

![example](https://user-images.githubusercontent.com/1832537/44593550-11309980-a79a-11e8-8ec5-6c3d6430e06c.gif)

### Installation

Requirements:
- Google Chrome/Chromium 65+
- Firefox 63+
- yarn ^1.13.0

Clone this repo and install dependencies:

```bash
git clone https://github.com/herodrigues/chrome-react-minimal.git
cd chrome-react-minimal
yarn install
```
To run in development mode:

```bash
# watch files in development mode to './build'
$ yarn start
```

To run  in production mode:

```bash
# build files to './dist'
$ yarn run build
```

##### Chrome

- Open the Extensions settings (Wrench button > Tools >  Extensions or navigate to `chrome://extensions`.
- On the Extensions settings tab, click the "Developer Mode" checkbox.
- Click the now-visible "Load unpacked extension..." button. Navigate to the directory where you cloned guru-extension repository, then the `build/chrome` directory under that.

##### Firefox

- Navigate to `about:debugging#addons`.
- On the Add-ons tab, click the "Enable add-on debugging" checkbox.
- Click "Load Temporary Add-on" button. Navigate to the directory where you cloned guru-extension repository, then select the `manifest.json` file under the `build/firefox` directory.

##### Opera

- Navigate to `opera://extensions`.
- On the Extensions settings tab, click the "Developer mode" button.
- Click the "Load unpacked extension..." button. Navigate to the directory where you cloned guru-extension repository, then the `build/opera` directory under that.

<!--
#### Inspecting React components with react-devtools

You can use [react-devtools](https://github.com/facebook/react-devtools) on development mode.

Open another terminal and run:
```bash
$ yarn global add react-devtools
$ react-devtools
```
-->
