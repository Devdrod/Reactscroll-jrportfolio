import React, {  Fragment, useState} from 'react'
import axios from "axios"


const Contact = () => {
        const [formData, setFormData] = useState({
            email: '',
            message:'',
        });

        const { email, message } = formData;
        
        const onChange = e => setFormData({ ...formData,
             [e.target.name] :  [e.target.value]});
    
        
        const onSubmit = async e => {
            e.preventDefault();
            if(email === undefined || message === undefined){
 console.log('You need to fill the entire form');
} else{
    const newContact = {
email,
message,
    }
    console.log(formData)
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                const body = JSON.stringify(newContact);

                const res = await axios.post(
                 "https://myportfoliobackend2020.herokuapp.com/api/contact",
                  body,
                  config
                )
                console.log(res)
                setFormData({ ...formData, email:'' , message:''})
            } catch (err) {
                console.error(err.response)
            }
        }
        }
        return <Fragment>

            
        <div className="flexbox-container" id="contact">
        <div className="flexbox-contact">
                        
        <h2 className=""> Feel free to contact me! </h2>

        <form onSubmit={e => onSubmit(e)} >
                   <div>
        <input
        type="email"
        name="email"
        placeholder="Type your e-mail here..."
        value={email}
        onChange={e => onChange(e)}
        required
        />

</div>   
<div>
  
         <input
         style={{height:"100px", width:"320px"}}
        type='message'
        name="message"
        placeholder="Type a message here"
        value={message}
        onChange = {e => onChange(e)}
        required
        />
                             
</div>
<br></br>
    <button type="submit" className="example_a">
    Send form
    </button>  

    </form>
                       
                    </div>
                    </div>
         
            </Fragment>
        
    }


export default Contact
