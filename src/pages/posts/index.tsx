import { usePrismicDocumentByUID, usePrismicDocuments } from '@prismicio/react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { createClient } from '../../services/prismic';
import styles from './styles.module.scss'

export default function Posts({ posts }) {

    return(
        <>
            <Head> <title> Posts | Ignews </title> </Head>
{console.log(posts)}
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time> 12 de novembro de 2002 </time>
                        <h1>
                            Hello World
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nulla assumenda animi 
                            exercitationem possimus sint vitae numquam iure deleniti aperiam necessitatibus alias, 
                            culpa dolore ex natus architecto omnis voluptatem delectus?
                        </p>

                        <h1 style={{margin: 50}}>
                            safasfs
                        </h1>
                    </a>
                    
                </div>
            </main>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({previewData}) => {

    const client = createClient({previewData});

    
        try {
            const response = await client.getAllByType('posts')
    console.log(response)
        } catch (err){
            console.log(err)
        }
    

    return {
        props: {  }
    }
}