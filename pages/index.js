import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Cartfield from '../src/cartfield.js'
import {useState} from 'react'
import Link from 'next/link'
import Paypal from '../src/paypal'

function Home() {

    // let option1 =0;
    var formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'GBP',
    
      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    const [option1,setOption1] = useState(0)
    const [option2,setOption2] = useState(0)
    const [price1,setPrice1] = useState(12.50)
    const [price2,setPrice2] = useState(15.00)
    const [total,setTotal] = useState(0)
    const [total1,setTotal1] = useState(0)
    const [total2,setTotal2] = useState(0)
    function add(event)
    {
        if(event.target.name == "option1")
        {
          event.target.value++;
          setOption1(event.target.value)
          setTotal1(total1+price1)
          setTotal(total+price1)
        }

        if(event.target.name == "option2")
        {
          event.target.value++;
          setOption2(event.target.value)
          setTotal2(total2+price2)
          setTotal(total+price2)
        }
        // console.log(event.target);
    }

    function minus(event)
    {
      if(event.target.name == "option1" && option1 > 0)
      {
        event.target.value--;
        setOption1(event.target.value)
        setTotal1(total1-price1)
        setTotal(total-price1)
      }

      if(event.target.name == "option2" && option2 > 0 )
      {
        event.target.value--;
        setOption2(event.target.value)
        setTotal2(total2-price2)
        setTotal(total-price2)
      }
    }
    const [checkout, setCheckout] = useState(false)
  return (
    <div className={styles.container}>
      <Head>
        <title>Cupid Delights</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="icon" href="/logo.jpeg" /> */}

      </Head>

      <div className={styles.title}>
          <h1>Cupid Delights</h1>
          <h4>Made with love</h4>
      </div>

      <div className={styles.content}>
        
        <div className={styles.logo}>
            <Image
              src="/../public/logo.jpeg"
              alt="logo"
              width={90}
              height={90}
              />
        </div>
          
          <h2>Order Here</h2>
          <div className={styles.options}> 
          <span>{formatter.format(price1)}</span><p>Option 1</p> <button name ="option1" value={option1} onClick={add} className="plusbutton"> + </button> <button name ="option1" onClick={minus} value={option1} className="minusbutton"> - </button>
            <br></br>
          {/* </div>
          <div className={styles.options}> */}
            <span>{formatter.format(price2)}</span><p>Option 2</p> <button value={option2} name ="option2" onClick={add} className="plusbutton"> + </button> <button name ="option2" onClick={minus} value={option2} className="minusbutton"> - </button>
          </div>

          <div className={styles.cart}>
            <h2>Cart</h2>
                <Cartfield option1 = {option1} price1={price1}
                option2 = {option2} price2={price2} total1={total1} total2={total2} total={total}/>
          </div>

          {/* <Link href="/checkout">  //leads to a checkout page
                <a><button className={styles.orderButton}>Checkout</button></a>
          </Link> */}
          <div className={styles.paypalbuttons}>
                {
                    (total>0 && checkout)? <Paypal bill={total}/> :
                    <div>
                        <button className={styles.orderButton}
                        
                        onClick={()=>{
                            setCheckout(true)
                        }}
                        
                        >Checkout</button>
                    </div>
                }

                {/* <Paypal/> */}

            </div>
      </div>
            <script src="https://www.paypal.com/sdk/js?client-id=AS8t-4KApnSdgE1-zg1Z5L-9OZBOUWPwsL-BZiMWFn_TxywrpykkO93H0uS5X9DXvfCvZHnpimmOPnAP&currency=GBP" data-sdk-integration-source="button-factory" async defer></script>
      
    </div>
  )
}

export default Home;
// export {option1};