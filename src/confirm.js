import styles from '../styles/confirm.module.css'
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import react from 'react';
init("user_I8maVpumJJ5NPgSnOdsDM");

export default function Confirm({option1,option2,price1,price2,total1,total2,total,name1,name2, quantity,shipping,nextDay}){

    var formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'GBP',
      });

    let body = "Order: " + option1 + " of " + name1 +"(s)" +" @ " + formatter.format(price1) + " |\n"+
                option2 + " of " + name2 +"(s)" + " @ " + formatter.format(price2) + " |\n" +
                "Cost: " + formatter.format(total) + " |\n" +
                "Quantity: " + quantity + " |\n" + 
                "Shipping: " + formatter.format(shipping) + " |\n" + 
                "Total: " + formatter.format(Number(total+shipping)) 

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_ghaveav', 'template_2wf1e1f', e.target, 'user_I8maVpumJJ5NPgSnOdsDM')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }


      function sendEmailToOwner(e) {
        e.preventDefault();
        
        // console.log(e.target.querySelector("input[name = 'to_name']").value)
        // console.log(e.target.querySelector("input[name = 'contact_number']").value)
        // console.log(e.target.querySelector("input[name = 'address']").value)
        // console.log(e.target.querySelector("input[name = 'country']").value)
        // console.log(e.target.querySelector("textarea[name = 'message']").value)
        var contactParams = {
            to_email: "sammateo4@gmail.com",
            to_name: e.target.querySelector("input[name = 'to_name']").value,
            address:e.target.querySelector("input[name = 'address']").value,
            country:e.target.querySelector("input[name = 'country']").value,
            contact_number:e.target.querySelector("input[name =contact_number]").value,
            message: body
        }
        emailjs.send('service_ghaveav', 'template_2wf1e1f', contactParams)
        //.then(function (res) {})
    }

    return(
        <div>
            {/* onSubmit={sendEmail} */}
            <form className={styles.form} onSubmit={(e)=> {sendEmail(e); sendEmailToOwner(e);}} >
            <p>Shipping</p>
            <label>Name</label>
            <input type="text" name="to_name" required />
            <label>Phone Number</label>
            <input type="tel" name="contact_number" required/>
            <label>Email</label>
            <input type="email" name="to_email" required />
            <label>Address</label>
            <input type="text" name="address" required />
            <label>Country</label>
            <input type="text" name="country" required />
            <label>Order</label>
            <textarea name="message" value={body} readOnly/>
            {/* <input type="submit" value="Send" className={styles.button} /> */}
            <button type="submit" value="Send" className={styles.button}>Submit</button>
            </form>

            

        </div>
    )
}