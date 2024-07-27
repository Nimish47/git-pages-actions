import { useState, useEffect } from 'react'
import '../../firebaseConfig';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import DocView from '../modal/DocView'
import styles from './Library.module.css'

// const data = [
//     { title: "Objects and Functions", body: "Hola" },
//     { title: "Arrays destructuring", body: "Haya" },
//     { title: "Mojito Functions", body: "Hola2" },
//     { title: "Popeye function", body: "Hola3" },
//     { title: "Closures and ghoisting", body: "Hola4" },
// ]

function Library() {

    const [body, setBody] = useState('')
    const [items, setItems] = useState([])

    const db = getFirestore()

    useEffect(() => {
        const fetchItems = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, 'computing'));
            const itemsArray = querySnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            setItems(itemsArray);
          } catch (error) {
            console.error("Error fetching documents: ", error);
          }
        };
    
        fetchItems();
      }, []);

    const showModal = (documentBody) => {
        setBody(documentBody)
    }

    const closeModal = () => {
        setBody('')
    }

    return (
        <>
            <div className={styles.libraryContainer}>
                {items.map((document) => {
                    return (
                        <div
                            onClick={() => showModal(document.content)}
                            className={styles.documents}>
                            <div className={styles.title}>{document.title}</div>
                            <div className={styles.view}>View</div>
                        </div>
                    )
                })}
            </div>
            {body.trim().length > 0 && <DocView closeModal={closeModal} body={body} />}
        </>
    );
}

export default Library;
