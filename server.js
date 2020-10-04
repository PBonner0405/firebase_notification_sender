var admin = require('firebase-admin');

var serviceAccount = require("./marine-embassy-209720-firebase-adminsdk-1azrg-ced171c53f.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: serviceAccount.projectId,
    databaseURL: serviceAccount.databaseURL
});

async function sendMessage() {
  // Send a message to devices with the registered tokens
  await admin.messaging().sendMulticast({
    tokens: ['dbLGW4rpg06uvOPI0HPk7g:APA91bHcwVBMHgwoUuZMFNVGlK_Y8DT0Vd5geK7P19lwp96x2hWpGdeAXrrXwKAXxK9Bx_OpJXIuK3UQ1gEjGl5xhQRXoMG9LgIv5-jizTY9PjhHpVXkusewvxmOecLqAI8YlSOccCam'],
    data: { hello: 'world!' },
  });
}

// Send messages to our users
sendMessage();