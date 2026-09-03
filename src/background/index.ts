import { browser } from "../shared/browser";

browser.runtime.onInstalled.addListener(() => {
  console.log("Service worker initialized.");
});