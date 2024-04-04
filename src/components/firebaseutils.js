import {db} from "../server/firebase"

const fetchDataFromFirebase = async (dataPath) => {
    const snapshot = await db.ref(dataPath).once('value');
    return snapshot.val();
};

export default fetchDataFromFirebase;
