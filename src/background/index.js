import browser from 'webextension-polyfill'

let clicked = false

browser.browserAction.onClicked.addListener((tab) => {
  clicked = !clicked
  chrome.tabs.sendMessage(tab.id, {
    type: 'TOGGLE_APP',
    payload: { visible: clicked }
  }).then((response) => {
    console.log(`Message was successful delivered to content script!`)
  })
})
