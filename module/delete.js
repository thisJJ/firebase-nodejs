export default function deleteData(firebaseConfig, file_path){
    let deleteData = {};
    deleteData[file_path] = null;
    firebaseConfig.database().ref().update(deleteData);
    return true;
}