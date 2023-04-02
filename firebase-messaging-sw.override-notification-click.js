self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    console.log('[firebase-messaging-sw.js] notification Event Listener Triggered ',  event);

    const pathname = event.notification?.data?.FCM_MSG?.notification?.click_action
    if (!pathname) return
    const url = new URL(pathname, self.location.origin).href

    event.waitUntil(
        self.clients
            .matchAll({ type: 'window', includeUncontrolled: true })
            .then((clientsArr) => {
                const hadWindowToFocus = clientsArr.some((windowClient) =>
                    windowClient.url === url ? (windowClient.focus(), true) : false
                )

                if (!hadWindowToFocus)
                    self.clients
                        .openWindow(url)
                        .then((windowClient) =>
                            windowClient ? windowClient.focus() : null
                        )
            })
    )
})


importScripts("https://www.gstatic.com/firebasejs/9.19.1/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.19.1/firebase-messaging-compat.js")




const firebaseConfig = {
    //REDACTED
  };

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

// DEBUG ONLY: Explore the notification payload
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  });









