const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.addMessage = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into Firestore using the Firebase Admin SDK.
    const writeResult = await admin.firestore().collection('messages').add({original: original});
    // Send back a message that we've successfully written the message
    res.json({result: `Message with ID: ${writeResult.id} added.`});
  });

// create an admin api here 
// admin -> edit roles
// staf

exports.addAdminRole = functions.https.onCall((data, context) => {
    // data
    // any custom data, email address to make an admin (data.email)
    // context
    // auth information

    // get user and add custom claim (admin)
    return admin.auth().getUserByEmail(data.email).then(user => {
        // eto yung pinasa nating email
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true,
        }).then(() => {
            // ano gagawin natin sa minted data?
            // ano babalik natin na response sa front end
            return {
                message: `Success! ${data.email} has been made an admin`
            }
        }).catch(err => {
            return err
        })
    })
    // returns a promise
    // we want to return a value
    // ano rereturn natin sa user?
    // promise = .then call back function kung ano gagawin
})