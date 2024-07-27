import { useState } from 'react'
import DocView from '../modal/DocView'
import styles from './Library.module.css'

const data = [
    { title: "Objects and Functions", body: "Hola" },
    { title: "Arrays destructuring", body: "Haya" },
    { title: "Mojito Functions", body: "Hola2" },
    { title: "Popeye function", body: "Hola3" },
    { title: "Closures and ghoisting", body: "Hola4" },
]

function Library() {

    const [body, setBody] = useState('')

    const showModal = (documentBody) => {
        setBody(documentBody)
    }

    const closeModal = () => {
        setBody('')
    }

    return (
        <>
            <div className={styles.libraryContainer}>
                {data.map((document) => {
                    return (
                        <div
                            onClick={() => showModal(document.body)}
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
