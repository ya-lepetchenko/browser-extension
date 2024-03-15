const domain = "https://dev-cabinet.onevoiplanet.ua/"

//var browser = chrome ?? browser
var factory = (()=> {
    if(chrome) return ch
    if(browser) return ffox
})()


document.addEventListener('DOMContentLoaded', function () {
    console.log("Created");
    const registrationButton = document.querySelector('.register-link')
    console.log(registrationButton);
    const signInButton = document.querySelector('.sign-in-link')
    const googleButton = document.querySelector('.google-auth-link')
    registrationButton.addEventListener('click', function() {
        factory.run({url: domain + 'registration'})
    }, false)
    signInButton.addEventListener('click', function() {
        factory.run({url: domain + 'auth'})
    }, false)
    googleButton.addEventListener('click', function() {
        factory.run({url: domain + 'api/connect/google'})
    }, false)
}, false)
factory.attachInterceptor()
// chrome.webRequest.onSendHeaders.addListener(function (details) {
//     console.log(details)
//   }, {urls: ['https://dev-cabinet.onevoiplanet.ua/*']},
//   ['requestHeaders', 'extraHeaders'])

// //  browser.storage.local.set({ shit: 'shit' }).then(() => { console.log("Value is set"); })
//  // browser.storage.local.get(['shit']).then((result) => { console.log("Value is " + result.shit); })
// console.log(window.localStorage.key(0))

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