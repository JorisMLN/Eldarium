import styles from './Home.module.css' ;

export function Home() {
    return (
        <div>
            <div>Home</div>
            <div className={styles.animBackground}></div>
            <img className={styles.fadeInLogo} src="/images/logo3.png" alt="eldariumLogo" loading="lazy"/>
        </div>
    ) ;
}