import firebaseConfig from './core';
import insertData from '../module/insert';
import selectData from '../module/select';
import updateData from '../module/update';
import deleteData from '../module/delete';
import authFacebook from '../module/authFacebook';
import * as authUser from '../module/authUser';

export {
    firebaseConfig,
    insertData,
    selectData,
    updateData,
    deleteData,
    authUser,
    authFacebook
};
