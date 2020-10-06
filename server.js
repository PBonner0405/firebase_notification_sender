var admin = require('firebase-admin');

var serviceAccount = require("./marine-embassy-209720-firebase-adminsdk-1azrg-ced171c53f.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: serviceAccount.projectId,
    databaseURL: serviceAccount.databaseURL
});

async function sendMessage() {
  // Send a message to devices with the registered tokens
  for(let i = 1 ; i < 2 ; i ++) {
    await admin.messaging().sendMulticast({
      tokens: ['c0O-CxlXlkLRmkx5UI7E_M:APA91bEhVN4ohs9g-B31mUVjFklCUtDzc7aEN2KtE-0YZ4M9_NVBXnps0HZaTPfFtCOkjU9n7QMYm3P91skVnqN_AuBjboMDRyQP_9_Zx1EflNftonwnbtbmliGfa2tAY77irTKgs8fx'],
      data: {
        // 'picUrl': "https://www.thespaghettidetective.com/favicon-32x32.png",
        // 'picUrl': 'https://www.thespaghettidetective.com/img/webcam.png',
        'picUrl': "https://www.thespaghettidetective.com/img/gauge.png",
        'condensedTitle': `condensedTitle-${i}`,
        'longTitle': `longTitle-${i}`,
        'longBody': `here is my body-${i}`,
        'alert': 'true',
      },
    });
    console.log(i);
  }
}

// Send messages to our users
sendMessage();