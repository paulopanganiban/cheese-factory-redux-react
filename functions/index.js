const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
    // data
    // any custom data, email address to make an admin (data.email)
    // context contains information about the user
    // auth information

    // get user and add custom claim (admin)

    // check request if made by an admin
    // remove this if no admin is set yet
    if(context.auth.token.userRole !== 'admin') {
        return { error: 'Only admins can add other admins, suckah'}
    }
    return admin.auth().getUserByEmail(data.email).then(user => {
        // eto yung pinasa nating email
        return admin.auth().setCustomUserClaims(user.uid, {
            userRole: 'admin',
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

exports.addCustomerRoleOnRegister = functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email).then(user => {
        return admin.auth().setCustomUserClaims(user.uid, {
            userRole: 'customer'
        }).then(() => {
            return {
                message: `Success! ${data.email} is now registered as a customer`
            }
        }).catch(err => {
            return err
        })
    })
})