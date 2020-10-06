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
    tokens: ['d_PNVpk2OUMHjTVyKsb8if:APA91bE8PGvOvkisxsFKOnAy_8BGhG-cBCtINf65dRT70X5OSUMLeHMOmkc2yLVHUCgzMDFHEKYG2r5d-dRULgXWUHjDPuXM9mxdnnZDKDD1Fu8PsZOcU6zdbnoc9docxja7cx-XoWH5'],
    data: { hello: 'world!' },
  });
}

// Send messages to our users
sendMessage();