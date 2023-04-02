# Firebase Messaging Web Notification Click Issue
### Documenting the lack of documentation around Firebase messaging Web Notifications Service Worker click event handling.

An extension of the [Firebase Official Docs](https://firebase.google.com/docs/cloud-messaging/js/receive)


## The issue
As of Firebase 9.19.0 JS SDK, [the Firebase Service Worker implementation](https://github.com/firebase/firebase-js-sdk/blob/37de4d015c9d0ed5341519533eb753b58ecbcff0/packages/messaging/src/listeners/sw-listeners.ts#L137) does not handle Notification Click Events if the link passed dose not share the same host as the Servie Worker. Source code shown [here](https://github.com/firebase/firebase-js-sdk/blob/37de4d015c9d0ed5341519533eb753b58ecbcff0/packages/messaging/src/listeners/sw-listeners.ts#L137).


The ['fcmOptions.link'](https://firebase.google.com/docs/reference/admin/dotnet/class/firebase-admin/messaging/webpush-fcm-options#link) MUST have the same host as the service worker registration host.

Example:

Service Worker host: https://www.app.com/

fcmOptions.link that will work: https://www.app.com/pageOne

fcmOptions.link that will NOT work: https://www.google.com


## Override this functionality
If the above limitation does not work for you, provided is an sample of how you can override this functionality (firebase-messaging-sw.override-notification-click.js)
