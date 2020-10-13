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
      tokens: [
        // 'c0O-CxlXlkLRmkx5UI7E_M:APA91bEhVN4ohs9g-B31mUVjFklCUtDzc7aEN2KtE-0YZ4M9_NVBXnps0HZaTPfFtCOkjU9n7QMYm3P91skVnqN_AuBjboMDRyQP_9_Zx1EflNftonwnbtbmliGfa2tAY77irTKgs8fx',
        // 'dWokBPQOSj2DqehJlpyDG-:APA91bHnyRfZdZRjHNIKmVWEez_4tzHHW0auG47FvW_u6p8FNs25DHcTre2414OlrYVoaTgtkrnRM6vY51ks2NV_XdhinPL-8IGp4gNC1g29f0dSxN5xSRGdspgmWMQ2XcmZgsCpOVDd',
        'dlsyTMULT12xnYHWD0A7on:APA91bENEJS_fQMVJuqyAJ_eL5MHZN12rs6XJs-1rXV4rEOjYWnEoyHw9k3_q6kuWiPTpFFSbStlj0BTvR5EfZcs9BbldJTiMA7UILXVd1_-FP6OxVE-CDC3alLpKg4ilhFaJimlr1h5',
        'c27p5TqCRPShj8vmj2cJKt:APA91bFz9rWBpI8oqe7rzkgqwyrrKt-nracCV721phiOqJc4mWRnF6Ijl9dROadeAjbDb1bc1wkXRMIwpO3hWzVVCws_dLmKd6vm5BenFSUXh-AgQrteKb_B95n3Xu8OCSQqrCrbETLr',
        'esxE1O5pQP-JkCKVQajyw6:APA91bGwrYZfPT0Mi1Nh5_cKL6z02czVUgAwrURNDltbqALlxqoFxcltpykvVdmylRCOt18baLt3aQyp1RO9D8eUa658aEmCMGBB9HF8q0VBhow1Sq5H0L0gQ0c0zEZ_AFGzfo1ELA-G'
      ],
      data: {
        'picUrl': "https://www.thespaghettidetective.com/favicon-32x32.png",
        // 'picUrl': 'https://www.thespaghettidetective.com/img/webcam.png',
        // 'picUrl': "https://www.thespaghettidetective.com/img/gauge.png",
        'condensedTitle': `condensedTitle-${i}`,
        'longTitle': `longTitle-${i}`,
        'longBody': `here is my body-${i}`,
        "alert": "true",
        "printId": "12345"
      },
    });
    console.log(i);
  }
}

// Send messages to our users
sendMessage();