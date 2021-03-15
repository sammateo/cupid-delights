import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import Image from 'next/image'
import Cartfield from '../src/cartfield.js'
// import {useState} from 'react'
import Link from 'next/link'
// import Home from './index'
// import {option1} from './index'
import Paypal from '../src/paypal'
export default function Checkout() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Cupid Delights Checkout</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://www.paypal.com/sdk/js?client-id=AS8t-4KApnSdgE1-zg1Z5L-9OZBOUWPwsL-BZiMWFn_TxywrpykkO93H0uS5X9DXvfCvZHnpimmOPnAP&currency=GBP" data-sdk-integration-source="button-factory" async defer></script>

      </Head>

      <div className={styles.title}>
          <h1>Checkout</h1>
      </div>

      <div className={styles.content}>
      <div className={styles.cart}>
            <h2>Cart</h2>
                {/* {option1} */}
                {/* {option2} */}
                <Cartfield/>

          </div>

          <Link href="/">
                <a><button className={styles.orderButton}>Back to Order</button></a>
          </Link>
      </div>

      {/* <Paypal/> */}
      
    </div>
  )

  
}
