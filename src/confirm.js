import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_I8maVpumJJ5NPgSnOdsDM");

export default function Confirm({email,name,body}){


    

    return(

        <div>
             <form className="contact-form" onSubmit={sendEmail}>
            <label>Contact Info</label>
            <input type="text" name="contact_number" />
            <label>Name</label>
            <input type="text" name="to_name" value={name}/>
            <label>Email</label>
            <input type="email" name="user_email" value={email}/>
            <label>Message</label>
            <textarea name="message" value={body} readOnly/>
            <input type="submit" value="Send" />
            </form>


        </div>
    )
}