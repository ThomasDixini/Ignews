import { GetStaticProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';


interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({product}: HomeProps) {
  return (
    <>
      <Head>
        <title> Ínicio | ig.news</title>
      </Head>

      <main className={styles.homeContainer}>
        <section className={styles.hero}>
          <span> 👏 Hey, welcome </span>
          <h1> News about the <span> React </span> world</h1>

          <p> Get acess to all publications <br/> <span> for {product.amount} month</span> </p>

          <SubscribeButton priceId={product.priceId}/>
        </section>

        <img src="/images/Mulher.svg" alt="Coding Girl" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const price = await stripe.prices.retrieve('price_1Kaka5DO5v6fPOi1ieEgWuZG')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("pt-br",{
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }

  return {
    props: {
      product,
    }
  };
};
