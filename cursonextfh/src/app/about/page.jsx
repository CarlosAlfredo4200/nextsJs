 
import styles from '../page.module.css'

const About = () => {
    return (
        <div className={styles.grid} >
            <a
                href="/"
                className={styles.card}
            >
                <h2>
                    Get started by Home <span>-&gt;</span>
                </h2>

            </a>
        </div>
    )
}

export default About