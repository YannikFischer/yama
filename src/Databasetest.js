import firebaseApp from './firebase.config';

async function fetchData(){
    const ref = firebaseApp
    .firestore()
    .collection("Products");
  const snapshot = await ref.get();
  const docs = [];
  var i = 0;
  snapshot.forEach(doc => {
    docs[i] = doc;
    console.log(doc.data());
    i++;
  });
}
fetchData();
