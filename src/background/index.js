import browser from 'webextension-polyfill'

let clicked = false

browser.browserAction.onClicked.addListener((tab) => {
  clicked = !clicked
  const port = browser.tabs.connect(tab.id)
  port.postMessage({ visible: clicked })
})
