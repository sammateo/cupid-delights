import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Cartfield from '../src/cartfield.js'
import {useState} from 'react'
import Link from 'next/link'
import Paypal from '../src/paypal'
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_I8maVpumJJ5NPgSnOdsDM");


function Home() {
  const [checkout, setCheckout] = useState(false)
    // let option1 =0;
    var formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'GBP',
    });
    const name1 ='Plain Roti Skin'
    const name2 ='Dhal Puri Roti Skin'
    const [option1,setOption1] = useState(0)//quantity of option1
    const [option2,setOption2] = useState(0)//quantity of option2
    const [price1,setPrice1] = useState(2)
    const [price2,setPrice2] = useState(3)
    const [total,setTotal] = useState(0)
    const [total1,setTotal1] = useState(0)
    const [total2,setTotal2] = useState(0)
    const[shipping1,setShipping1] = useState(5.57)
    const[shipping2,setShipping2] = useState(5.99)
    const[shipping3,setShipping3] = useState(7.99)
    const[quantity,setQuantity] = useState(0)
    
    function add(event)
    {
      setCheckout(false)
        if(event.target.name == "option1")
        {
          event.target.value++;
          setOption1(event.target.value)
          setTotal1(total1+price1)
          setTotal(total+price1)
          setQuantity(quantity+1)
        }

        if(event.target.name == "option2")
        {
          event.target.value++;
          setOption2(event.target.value)
          setTotal2(total2+price2)
          setTotal(total+price2)
          setQuantity(quantity+1)
        }
    }

    function minus(event)
    {
      setCheckout(false)
      if(event.target.name == "option1" && option1 > 0)
      {
        event.target.value--;
        setOption1(event.target.value)
        setTotal1(total1-price1)
        setTotal(total-price1)
        setQuantity(quantity-1)
      }

      if(event.target.name == "option2" && option2 > 0 )
      {
        event.target.value--;
        setOption2(event.target.value)
        setTotal2(total2-price2)
        setTotal(total-price2)
        setQuantity(quantity-1)
      }
    }


    function sendEmail(email,name,body) {
      // e.preventDefault();
      var contactParams = {
          to_email: email,
          to_name: name,
          message: body
      }
  
      emailjs.send('service_ghaveav', 'template_2wf1e1f', contactParams).then(function (res) {})
  }


  function sendEmailToOwner(name,body) {
    // e.preventDefault();
    var contactParams = {
        to_email: "sammateo4@gmail.com",
        to_name: name,
        message: body
    }

    emailjs.send('service_ghaveav', 'template_2wf1e1f', contactParams).then(function (res) {})
}

    function checkoutFunc(){
      setCheckout(true)
      //let quant = Number(option1)+Number(option2);
      // if(quantity<5){
      //   alert("Minimum order is 5 roti skins")
      // }
      // if(quantity >= 5 && quantity <= 12){
      //   alert("5.57")
      // }
      // if(quantity >=13 && quantity <=19){
      //   alert("5.99")
      // }
      // if(quantity >=20 && quantity <=40){
      //   alert("7.99")
      // }

      // if(quantity > 40){
      //   alert("Contact us for orders larger than 40 roti skins")
      // }

      

      
    }
    
  return (
    <div className={styles.container}>
      <Head>
        <title>Cupid Delights</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://smtpjs.com/v3/smtp.js"></script>

      </Head>

      <div className={styles.title}>
          <h1>Cupid Delights</h1>
          <h4>Made with love</h4>
      </div>


      <div className={styles.additionalInfo}>
          <div className={styles.shippingInfo}>

            <h2>Shipping</h2>
            <p>5-12 rotis </p>
            <p>{formatter.format(shipping1)}</p>
            <p>13-19 rotis</p>
            <p>{formatter.format(shipping2)}</p>
            <p>20-40 rotis</p>
            <p >{formatter.format(shipping3)}</p>
            <p className={styles.larger}>Contact us for larger orders</p>
          </div>

          

        </div>


      <div className={styles.content}>
        
        {/* <div className={styles.logo}>
            <Image
              src="/../public/logo.jpeg"
              alt="logo"
              width={90}
              height={90}
              />
        </div> */}
          <h2>Order Here</h2>
          <p>Note: Minimum order is 5 roti skins</p>
          <div className={styles.options}> 
          <span>{formatter.format(price1)}</span><p>{name1}</p> <button name ="option1" value={option1} onClick={add} className="plusbutton"> + </button> <button name ="option1" onClick={minus} value={option1} className="minusbutton"> - </button>
            <br></br>
          {/* </div>
          <div className={styles.options}> */}
            <span>{formatter.format(price2)}</span><p>{name2}</p> <button value={option2} name ="option2" onClick={add} className="plusbutton"> + </button> <button name ="option2" onClick={minus} value={option2} className="minusbutton"> - </button>
          </div>
          {/* <p>{quantity}</p> */}
          <div className={styles.cart}>
            {total==0?<h2>Cart Empty</h2>:<h2>Cart</h2>}
                <Cartfield option1 = {option1} price1={price1}
                option2 = {option2} price2={price2} total1={total1} total2={total2} total={total} name1={name1} name2={name2} quantity={quantity}/>
          </div>
          {/* <div className={styles.paypalbuttons}>
                {
                    (total>0 && checkout)? <Paypal bill={total} option1 = {option1} price1={price1}
                    option2 = {option2} price2={price2} name1={name1} name2={name2}/> :
                    <div>
                        <button className={styles.orderButton}
                        
                        onClick={()=>{
                            setCheckout(true)
                        }}
                        
                        >Checkout</button>
                    </div>
                }

            </div> */}
            {/* {((option1+option2)>5)?<button className={styles.orderButton}>Checkout</button>:null} */}
            <button className={styles.orderButton} onClick={checkoutFunc}>Checkout</button>
            
      </div>








      <div className={styles.footer}>
        <div>
            <h3>Contact Information</h3>
            <p>Call/Whatsapp +44 7432 577502</p>
            {/* <p>Whatsapp +44 7432 577502</p> */}
            <Link href="https://www.facebook.com/Cupid-Delights-103544264841798/?tn-str=k*F">
                <a target="_blank">Facebook</a>
            </Link>
        </div>
        
        <p>Cupid Delights aims to satisfy your taste buds &amp; give you a taste of "home" with our delicious rotis. Enjoy Roti Fridays & Roti Skin Tuesdays via post so no one is left out.
</p>
      
      </div>


            <script src="https://www.paypal.com/sdk/js?client-id=AS8t-4KApnSdgE1-zg1Z5L-9OZBOUWPwsL-BZiMWFn_TxywrpykkO93H0uS5X9DXvfCvZHnpimmOPnAP&currency=GBP" data-sdk-integration-source="button-factory" async defer></script>
            {/* <script src="https://smtpjs.com/v3/smtp.js"> */}
{/* </script> */}
    </div>
  )
}

export default Home;
// export {option1};