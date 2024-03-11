const domain = "https://dev-cabinet.onevoiplanet.ua/"

document.addEventListener('DOMContentLoaded', function () {
    const registrationButton = document.querySelector('.register-link');
    const signInButton = document.querySelector('.sign-in-link');
    const googleButton = document.querySelector('.google-auth-link');
    registrationButton.addEventListener('click', function() {
        chrome.tabs.create({url: domain + 'registration'});
    }, false);
    signInButton.addEventListener('click', function() {
        chrome.tabs.create({url: domain + 'auth'});
    }, false);
    googleButton.addEventListener('click', function() {
        chrome.tabs.create({url: domain + 'api/connect/google'});
    }, false);
}, false);


chrome.webRequest.onCompleted.addListener(function (details) {
    // Process the XHR response metadata. The request body is not available
    console.log(details)
  }, {urls: ['<all_urls>']});