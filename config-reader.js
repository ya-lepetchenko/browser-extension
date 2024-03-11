const domain = "https://dev-cabinet.onevoiplanet.ua/"
// function loadConfig() {
//     fetch('config.json', {
//         credentials: "include",
//         mode: 'no-cors'
//     })
//         .then(response => response.json())
//         .then(config => {
//             document.querySelector('.register-link').setAttribute('href', config.domain + 'registration')
//             document.querySelector('.sign-in-link').setAttribute('href', config.domain + 'auth')
//             document.querySelector('.google-auth-link').setAttribute('href', config.domain + 'api/connect/google')
//         })
//         .catch(error => console.error('Error loading the configuration:', error))
// }

// window.onload = loadConfig

// function attachDomainToLinks() {
//     document.querySelector('.register-link').setAttribute('href', domain + 'registration')
//     document.querySelector('.sign-in-link').setAttribute('href', domain + 'auth')
//     document.querySelector('.google-auth-link').setAttribute('href', domain + 'api/connect/google')
// }

// window.onload = attachDomainToLinks

document.addEventListener('DOMContentLoaded', function () {
    const registrationButton = document.querySelector('.register-link');
    const signInButton = document.querySelector('.sign-in-link');
    const googlenButton = document.querySelector('.google-auth-link');
    registrationButton.addEventListener('click', function() {
        chrome.tabs.create({url: domain + 'registration'});
    }, false);
    signInButton.addEventListener('click', function() {
        chrome.tabs.create({url: domain + 'auth'});
    }, false);
    googlenButton.addEventListener('click', function() {
        chrome.tabs.create({url: domain + 'api/connect/google'});
    }, false);
}, false);