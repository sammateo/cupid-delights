import Head from 'next/head'
import  React from 'react'
import {useEffect, useRef,useState} from 'react'
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_I8maVpumJJ5NPgSnOdsDM");
import Confirm from './confirm'



export default function Paypal({bill,option1,option2,price1,price2, name1, name2})
{   

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


    var formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'GBP',
      });

    const [approved,setApproved] = useState(false)

    useEffect(()=>{
        window.paypal.Buttons({
            style: {
                shape: 'rect',
                color: 'blue',
                layout: 'vertical',
                label: 'paypal',
                
              },
        
            createOrder: (data,actions,err)=>{
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units : [
                        {
                            description : option1 + " of "+name1+" @ " + formatter.format(price1) + " | " + option2 + " of "+name2+" @ "+ formatter.format(price2),
                            amount: {
                                currency_code: "GBP",
                                value: bill
                            }
                        }
                    ]
                })
            },

            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log(order);
                // console.log(data)
                let email = prompt("Send reciept to?",order.payer.email_address)
                if(email==null || email == " ")
                {
                    email = order.payer.email_address
                }
                let name = prompt("Name", order.payer.name.given_name + " " + order.payer.name.surname)
                // alert (formatter.format(order.purchase_units[0].amount.value))
                // alert (order.purchase_units[0].description)
                // alert (order.purchase_units[0].shipping.address.address_line_1)
                // alert (order.purchase_units[0].shipping.address.admin_area_1)
                // alert (order.purchase_units[0].shipping.address.admin_area_2)
                // alert (order.purchase_units[0].shipping.address.country_code)
                // alert (order.purchase_units[0].shipping.address.postal_code)
                let shipaddress = order.purchase_units[0].shipping.address.address_line_1 + " \n" + order.purchase_units[0].shipping.address.admin_area_1 + " \n" + order.purchase_units[0].shipping.address.admin_area_2 + " \n" +  order.purchase_units[0].shipping.address.country_code + " \n" + order.purchase_units[0].shipping.address.postal_code;
                let body = "Order: " + order.purchase_units[0].description +". \n" + "Total: " + formatter.format(order.purchase_units[0].amount.value) + "\n" + "To be shipped to:\n " + shipaddress;
                alert(body)
                setApproved(true)
                sendEmail(email,name,body)
                sendEmailToOwner(name,body)
                
            },
            onError: (err) =>{
                console.log(err)
            }
        }).render(paypal.current)
    }, [])

    console.log(bill)
    // console.log(consumer)
    return(
        
        <div>
            <div ref={paypal}></div>
            
        </div>
    )
}