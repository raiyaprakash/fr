
var firebaseConfig = {
    apiKey: "AIzaSyDUFduD1WioESuzZ1Q1emdr623tMfZvTns",
    authDomain: "fastrojgar-webpush.firebaseapp.com",
    projectId: "fastrojgar-webpush",
    storageBucket: "fastrojgar-webpush.appspot.com",
    messagingSenderId: "446123143842",
    appId: "1:446123143842:web:a7107d41f6612ea1729dfb"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

function resetUI() {
    messaging.getToken({
        vapidKey: "BKBQ77kB5SieZ4NAmlrqtcGEUcJiJniSVMTdnIvzdancjfUsHxsQSamhJS2AQFkbN297ttxCq-Lv5CzSpF2sNWQ"
    }).then(e => {
        e ? sendTokenToServer(e) : (console.log("No registration token available. Request permission to generate one."), setTokenSentToServer(!1))
    }).catch(e => {
        console.log("An error occurred while retrieving token. ", e), showToken("Error retrieving registration token. ", e), setTokenSentToServer(!1)
    })
}

function sendTokenToServer(e) {
    var o;
    isTokenSentToServer() ? (console.log("Token already sent to server"), console.log(e)) : (console.log("Sending token to server..."), console.log(e), (o = document.createElement("iframe")).src = "/save?token=" + e, o.title = "Token Save", document.body.appendChild(o), o.style.display = "none", setTokenSentToServer(!0))
}

function isTokenSentToServer() {
    return "1" === window.localStorage.getItem("sentToServer")
}

function setTokenSentToServer(e) {
    window.localStorage.setItem("sentToServer", e ? "1" : "0")
}

function requestPermission() {
    var e = !1;
    window.addEventListener("scroll", function () {
        (0 != document.documentElement.scrollTop && !1 === e || 0 != document.body.scrollTop && !1 === e) && (console.log("Requesting permission..."), Notification.requestPermission().then(e => {
            "granted" === e ? (console.log("Notification permission granted."), resetUI()) : console.log("Unable to get permission to notify.")
        }), e = !0)
    }, !0)
}
messaging.onMessage(function (e) {
    console.log("onMessage: ", e);
    var o = e.data.title,
        n = {
            body: e.data.body,
            icon: e.data.icon,
            data: {
                click_action: e.data.click_action
            }
        };
    navigator.serviceWorker.getRegistration().then(e => {
        e.showNotification(o, n)
    })
}), "serviceWorker" in navigator && window.addEventListener("load", () => {
    navigator.serviceWorker.register("/firebase-messaging-sw.js").then(e => {
        console.log("Service Worker Registered"), firebase.messaging().useServiceWorker(e), setTimeout(requestPermission, 600)
    }).catch(e => {
        console.log("SW registration failed: ", e)
    })
});
console.log('aded3')
