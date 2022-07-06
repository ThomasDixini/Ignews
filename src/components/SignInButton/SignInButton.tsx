import styles from './styles.module.scss';

import { signIn, signOut, useSession } from 'next-auth/react'

import  { FaGithub }  from 'react-icons/fa';
import { FiX } from 'react-icons/fi'

export function SignInButton() {

    const  {data: session}  = useSession();


    return session ? (
        <button 
        type="button" 
        className={styles.githubButton}
        onClick={() => signOut()}
        >
            <FaGithub color="#04d361"/>
            {session.user.name}
            <FiX color="737388" className={styles.closeIcon}/>

        </button>
    ) : (
        <button 
        type="button" 
        className={styles.githubButton}
        onClick={() => signIn('github')}
        >
            <FaGithub color="#eba417"/>
            <p>Sign In with Github</p>

        </button>
    )
}