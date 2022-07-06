import styles from '../Header/styles.module.scss';
import { SignInButton } from '../SignInButton/SignInButton';

export function Header() {
    return (
        <>
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/ig.news.svg" alt="Logo Ignews" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>

                    
                </nav>
                <SignInButton />
            </div>
        </header>
        </>
    );
}