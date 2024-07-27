import styles from './Navbar.module.css'

function Navbar({ changeDoc }) {

    const clickHandler = (event) => {
        changeDoc(event.target.getAttribute('name'))
    }

    return (
        <>
            <div
                name='addnote'
                className={styles.companyText}
                onClick={clickHandler}
            >NOTES MANAGER
            </div>
            <div
                className={styles.focusText}
            >STAY FOCUSSED
            </div>
            <div
                name='library'
                className={styles.library}
                onClick={clickHandler}
            >Collections
            </div>
        </>
    );
}

export default Navbar;
