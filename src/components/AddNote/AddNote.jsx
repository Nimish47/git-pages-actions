import { useState } from 'react';
import '../../firebaseConfig';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import styles from './AddNote.module.css'

function AddNote() {

    const [showcontent, setShowContent] = useState(false)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [color, setColor] = useState(false)

    const db = getFirestore()

    const changeHandler = (event) => {
        let val = event.target.value
        if (event.target.name === 'title') setTitle(val)
        if (event.target.name === 'body') {
            setBody(val)
            if (val.trim().length) setColor(true)
            else setColor(false)
        }
    }

    const showHideContent = () => {
        setShowContent(!showcontent)
    }

    const sendData = async () => {
        if (color) {

            const obj = {
                title: title,
                content: body
            }

            const res = await addDoc(collection(db, "computing"), obj);
            console.log(res)
            console.log('Sent data....', obj)
        }
    }


    return (
        <>
            <div className={styles.notesContainer}>
                <input
                    name='title'
                    className={styles.inputTitle}
                    type='text'
                    placeholder='Add a new title'
                    value={title}
                    onChange={changeHandler}
                />
                <input
                    className={styles.addNote}
                    name='Add'
                    type='button'
                    value='Add content'
                    onClick={showHideContent}
                />
            </div>
            {showcontent && (
                <>
                    <div className={styles.textArea}>
                        <textarea
                            name='body'
                            value={body}
                            placeholder='Enter content here'
                            className={styles.textAreaInput}
                            onChange={changeHandler}
                        />
                    </div>
                    <div
                        className={color ? styles.sendDataColor : styles.sendData}
                        onClick={sendData}
                    >
                        Send data
                    </div>
                </>
            )}
        </>
    );
}

export default AddNote;
