const domain = "https://dev-cabinet.onevoiplanet.ua/"

document.addEventListener('DOMContentLoaded', function () {
    const registrationButton = document.querySelector('.register-link')
    const signInButton = document.querySelector('.sign-in-link')
    const googleButton = document.querySelector('.google-auth-link')
    registrationButton.addEventListener('click', function() {
        chrome.tabs.create({url: domain + 'registration'})
    }, false)
    signInButton.addEventListener('click', function() {
        chrome.tabs.create({url: domain + 'auth'});
    }, false)
    googleButton.addEventListener('click', function() {
        chrome.tabs.create({url: domain + 'api/connect/google'})
    }, false)
}, false)

chrome.webRequest.onSendHeaders.addListener(function (details) {
    console.log(details)
  }, {urls: ['https://dev-cabinet.onevoiplanet.ua/*']},
  ['requestHeaders', 'extraHeaders'])

chrome.storage.local.set({ shit: 'shit' }).then(() => { console.log("Value is set"); })
chrome.storage.local.get(['shit']).then((result) => { console.log("Value is " + result.auth); })
console.log(window.localStorage.key(0))

//   chrome.storage.sync.get(['auth-login'], (items) => {
//     (items) => {}
//   });
// function reddenPage(url) {
//     console.log(url);
// }

//   chrome.webRequest.onBeforeRequest.addListener(tab => {
//     chrome.scripting.executeScript(
//         {
//         target: { tabId: tab.tabId },
//         function: reddenPage,
//         args: [details.url],
//         },
//         () => { console.log('ZZZ') });
//     },  {
//         urls: ['<all_urls>']
//     });  