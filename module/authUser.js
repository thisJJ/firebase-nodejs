export function currentUser(firebaseConfig){
    const user = firebaseConfig.auth().currentUser;
    if (user) {
        return user;
    } else {
        return false;
    }
}

export function updateUser(firebaseConfig,  ){
    const user = currentUser(firebaseConfig);
    user.updateProfile(data).then(function() {
        return true;
    }, function(error) {
        return error;
    });
}

export function updateEmail(firebaseConfig, new_email){
    const user = currentUser(firebaseConfig);
    user.updateEmail(new_email).then(function() {
        return true;
    }, function(error) {
        return error;
    });
}

export function sendVerifyEmail(firebaseConfig){
    const user = currentUser(firebaseConfig);
    user.sendEmailVerification().then(function() {
        return true;
    }, function(error) {
        return error;
    });
}

export function changePassword(firebaseConfig, new_password){
    const user = currentUser(firebaseConfig);
    user.updatePassword(new_password).then(function() {
        return true;
    }, function(error) {
        return error;
    });
}

export function deleteUser(firebaseConfig){
    const user = currentUser(firebaseConfig);
    user.delete().then(function() {
        return true;
    }, function(error) {
        return error;
    });
}

export function logout(firebaseConfig){
    firebaseConfig.auth().signOut().then(function() {
        return true;
    }, function(error) {
        return error;
    });
}