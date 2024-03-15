const ch = {
    run:(obj)=>{
        chrome.tabs.create(obj)
    },
    attachInterceptor:() => {
        chrome.webRequest.onSendHeaders.addListener(function (details) {
            console.log(details)
          }, {urls: ['https://dev-cabinet.onevoiplanet.ua/*']},
          ['requestHeaders', 'extraHeaders'])
    }
}
// export {
//     ch
// }