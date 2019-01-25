let clicked = false

chrome.browserAction.onClicked.addListener((tab) => {
  clicked = !clicked
  chrome.tabs.sendMessage(tab.id, {
    action: 'dispatch',
    data: {
      type: 'TOGGLE_APP',
      payload: { visible: clicked }
    }
  }, (response) => {
    console.log(`Message was successful delivered to content script!`)
  })
})
