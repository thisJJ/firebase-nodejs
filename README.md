## firebase-nodejs

# Firebase SDK for Node.js

# Optionals

* selectData 
For select data from firebase
* insertData
For insert data into firebase
* deleteData
For delete data on firebase
* updateData
For update data on firebase

# How to use it ?

Create firebase.js on you app folder, and write code below.
You can use data from you firebase project.
```js
import { firebaseConfig } from 'firebase-nodejs';

var config = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    storageBucket: '',
};
const firebase = firebaseConfig(config);
export default firebase;
```

So you add my code on you another file for use firebase.

# Examples
```js
import firebase from './firebase.js'; //add you firebase.js path
import { insertData, selectData, updateData, deleteData } from 'firebase-nodejs';

export class TestApp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      member: {},
    };
  }
  
  getMemberData(){
    let memberData = selectData(firebase, '/member/id/1', 'value');
    // if data is true function return your data, or no data function return false
    if(memberData !== false){
      this.setState({
         member: memberData,
      });
    } else {
      Alert('Not member !');
    }
  }
  
  render(){
     return(
       .
       .
       .
     )
   }
}

```

# Use another

# selectData

```js
const data = selectData(firebase, '/member/id/1', 'value')

```

# insertData

```js
const member = {
  name: 'test',
  age: 17,
}
const insertStatus = insertData(firebase, '/member/id/2', member);

```


# updateData

```js
const member = {
  name: 'test',
  age: 18,
}
const updateStatus = updateData(firebase, '/member/id/2', member);

```

# deleteData

```js
const deleteStatus = deleteData(firebase, '/member/id/2');

```
