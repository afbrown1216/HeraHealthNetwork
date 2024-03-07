import { useEffect, useState } from 'react';
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: ","
    apiKey: "",
  });

function Chatbox() {
    const [message, setMessage] = useState('');
    const [chats, setChats] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        setMessage("Hi, welcome to HeraHealth Network! I'm Hera and I'm here to help.");
    }, []);
    return (  
        <> 
            <div className="chat-header"> 
                <i className="back-arrow"> </i>

            </div>
            
            <section> 
            <div className={isTyping ? "" : "hide"}>
                <p>
                <i>{isTyping ? "Typing" : ""}</i>
                </p>
            </div>
                <div className='chat-message'> 
                    <img src={require('../assets/HeraAvatarShadow.png')} alt="Hera Avatar" className='chat-avatar'/>
                    
                    
                    <span>{message}</span>
                </div>
            </section>
            <form action="" >
            {/* onSubmit={(e) => chat(e, message)} */}
                <input
                type="text"
                name="message"
                value={message}
                placeholder="Type a message here and hit Enter..."
                onChange={(e) => setMessage(e.target.value)}
                />
                {/* onClick={(e) => chat(e,message) } */}
                <button type="submit" >Send</button>
            </form>
            
        </>
    );
}

export default Chatbox;