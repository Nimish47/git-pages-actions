import styles from './DocView.module.css'

function DocView({ body, closeModal }) {


    return (
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                <div className={styles.contentContainer}>
                    <div className={styles.body}>{body}</div>
                    <div 
                    className={styles.closeModal}
                    onClick={closeModal}
                    >Close</div>
                </div>
            </div>
        </div>
    );
}

export default DocView;
