import { useState } from 'react';
import styles from './AddNote.module.css'

function AddNote() {

    const [showcontent, setShowContent] = useState(false)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [color, setColor] = useState(false)

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

    const sendData = () => {
        if (color) {

            const obj = {
                id: Math.floor(Math.random() * 10000000),
                title: title,
                content: body
            }
            console.log('Sending data....', obj)
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
