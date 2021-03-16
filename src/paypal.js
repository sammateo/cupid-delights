import Head from 'next/head'
import {useEffect, useRef,useState} from 'react'
export default function Paypal({bill})
{
    let consumer = 0;
    consumer+=bill;
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
                            description : "Option 1",
                            amount: {
                                currency_code: "GBP",
                                value: consumer
                            }
                        }
                    ]
                })
            },

            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log(order);
                
            },
            onError: (err) =>{
                console.log(err)
            }
        }).render(paypal.current)
    }, [])

    console.log(bill)
    console.log(consumer)
    return(
        
        <div>
            <div ref={paypal}></div>
        </div>
    )
}