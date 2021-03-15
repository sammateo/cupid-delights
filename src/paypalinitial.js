import Head from 'next/head'
import {useEffect, useRef} from 'react'
export default function Paypal()
{
    const paypal = useRef()
    useEffect(()=>{
        window.paypal.Buttons({
            createOrder: (data,actions,err)=>{
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units : [
                        {
                            description : "Option 1",
                            amount: {
                                currency_code: "GBP",
                                value: 12.00
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
    return(
        
        <div>
            <div ref={paypal}></div>
        </div>
    )
}