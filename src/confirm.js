import styles from '../styles/confirm.module.css'
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_I8maVpumJJ5NPgSnOdsDM");

export default function Confirm({option1,option2,price1,price2,total1,total2,total,name1,name2, quantity}){

    var formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'GBP',
      });

    let body = "Order: " + option1 + " of " + name1 + " @ " + formatter.format(price1) + "|\n"+
                option2 + " of " + name2 + " @ " + formatter.format(price2) + "|\n" +
                "Total: " + formatter.format(total)
    // function sendEmail(e) {
    //      e.preventDefault()
    //      console.log(result)
    //     var contactParams = {
    //         to_email: email,
    //         to_name: name,
    //         message: body
    //     }
    
    //     //emailjs.send('service_ghaveav', 'template_2wf1e1f', contactParams).then(function (res) {})
    // }


    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_ghaveav', 'template_2wf1e1f', e.target, 'user_I8maVpumJJ5NPgSnOdsDM')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return(

        <div>
            <form className={styles.form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="to_name"/>
            <label>Phone Number</label>
            <input type="text" name="contact_number" />
            <label>Email</label>
            <input type="email" name="to_email"/>
            <label>Message</label>
            <textarea name="message" value={body} readOnly/>
            {/* <input type="submit" value="Send" className={styles.button} /> */}
            <button type="submit" value="Send" className={styles.button}>Submit</button>
            </form>


        </div>
    )
}