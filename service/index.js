import firebaseConfig from './core';
import insertData from '../module/insert';
import selectData from '../module/select';
import updateData from '../module/update';
import deleteData from '../module/delete';
import authFacebook from '../module/authFacebook';
import * as authUser from '../module/authUser';
import * as searchData from '../module/search';

export default {
    firebaseConfig,
    insertData,
    selectData,
    updateData,
    deleteData,
    authUser,
    authFacebook,
    searchData
};
