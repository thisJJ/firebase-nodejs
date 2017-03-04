export default function selectData(firebaseConfig, data_path, getFrom = 'value'){
     var fbRef = firebaseConfig.database().ref(data_path);
    fbRef.on(getFrom, (snapshot) => {
        let val = snapshot.val();
        if(val){
            return val;
        }else{
            return false;
        }
    });
}