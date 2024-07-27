import { useState } from 'react';
import AddNote from '../AddNote/AddNote';
import Navbar from '../Navbar/Navbar';
import styles from './Container.module.css'
import Library from '../Library/Library';

function Container() {

    const [document, setDocument] = useState('addnote')

    const changeDoc = (tab) => {
        setDocument(tab)
    }

    return (
        <>
            <div className={styles.navbar}>
                <Navbar changeDoc={changeDoc} />
            </div>
            <div className={styles.contentArea}>
            {document === 'addnote' && <AddNote />}
            {document === 'library' && <Library/>}
            </div>
        </>
    );
}

export default Container;
