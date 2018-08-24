# Chrome React Minimal

A minimal example of a Chrome extension using React and Redux.

![example](https://user-images.githubusercontent.com/1832537/44593550-11309980-a79a-11e8-8ec5-6c3d6430e06c.gif)

### Installation

Requirements:
- Google Chrome/Chromium 65+
- npm 5+

Clone this repo and install dependencies:

```bash
git clone https://github.com/herodrigues/chrome-react-minimal.git
cd chrome-react-minimal
npm install
```
To run in development mode:

```bash
# watch files in development mode to './build'
$ npm start
```

To run  in production mode:

```bash
# build files to './dist'
$ npm run build
```

- Open Google Chrome/Chromium and go to the Extensions settings (Wrench button > Tools >  Extensions or navigate to `chrome://extensions`.
- On the Extensions settings tab, click the "Developer Mode" checkbox.
- Click the now-visible "Load unpacked extension..." button. Navigate to the directory where you cloned guru-extension repository, then select the `build` or `dist` directory under that.

#### Using react-devtools

You can use [react-devtools](https://github.com/facebook/react-devtools) on development mode.

Open another terminal and run:
```bash
$ npm run react-devtools
```
