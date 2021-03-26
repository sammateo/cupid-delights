import styles from '../styles/cart.module.css'
import {useState} from 'react'
export default function Cartfield({option1,option2,total1,total2,total,name1,name2}){   
    var formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'GBP',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });

      const[shipping1,setShipping1] = useState(5.57)
    const[shipping2,setShipping2] = useState(5.99)
    const[shipping3,setShipping3] = useState(7.99)
    
    return(
        <div className={styles.container} >
                {(option1==0 ||option1 ==null)?null:
                    <div className={styles.cartoption}>
                        <p> 
                            {name1}  
                         </p>
                         <p>Quantity: {option1}</p>
                         <p>Price: {formatter.format(total1)}</p>
                    </div>
                    
                }
                {(option2==0||option2 == null)?null:
                
                    <div className={styles.cartoption}>
                        <p>{name2}</p>
                        <p>Quantity: {option2}</p>
                        <p>Price: {formatter.format(total2)}</p>
                        </div>
                }

                {((option1==0 ||option1 ==null)&&(option2==0||option2 == null))?null:
                <div>
                <p>Total: {formatter.format(total)}</p>
                <p>Quantity: {Number(option1)+Number(option2)}</p>
                </div>}
                
                
        </div>
        )
}