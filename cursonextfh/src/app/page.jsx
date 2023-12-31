import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    

      <main className={styles.main}>
        <div className={styles.description}>


        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="/about"
            className={styles.card}
            
            rel="noopener noreferrer"
          >
            <h2>
              Get started by About <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>
      </main>
    
  )
}
