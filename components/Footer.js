import styles from '@/styles/Home.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                href={"http://vercel.com"}
                target={"_blank"}
                rel={"noopener noreferrer"}
            >
                Powered by {" "}
                <img src={"/vercel.svg"} alt={"vercel Logo"} className={styles.logo} width={100}
                height={24}/>

            </a>
        </footer>
    );
}