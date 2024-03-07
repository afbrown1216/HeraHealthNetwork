require ('dotenv').config();
import { useEffect, useState } from 'react';
import { OpenAI } from "openai";



const assistant_id = "asst_h2jGrbgu0WCoLWVfeu356HP3"

const createThread = await fetch('http://localhost:5000/createThread', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        assId:  assistant_id ,
        prompt: prompt,
    }),
});
const data = await createThread.json();
const { runId, threadId } = data;


async function checkStatus(runId, threadId) {
    const run = await openai.beta.threads.runs.retrieve(
        threadId,
        runId
    );
    return run.status;
}

function Chatbox() {
    const [message, setMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [conversation, setConversation] = useState([]);

    useEffect(() => {
        setConversation([...conversation, { role: 'system', content: "Hi, I am Hera. Welcome to Hera Health Network! I'm Hera and I'm here to help." }]);
    }, []);

    async function handleUserInput(message) {
        setConversation([...conversation, { role: 'user', content: message }]);
        setIsTyping(true);
        const { runId, threadId } = await createThread('your-assistant-id', message);
        message = await openai.beta.threads.messages.create(
            threadId,
            { role: "user", content: message }
        );
        await openai.beta.threads.runs.create(
            threadId,
            assistant_id
        );

        let status = await checkStatus(runId, threadId);
        while (status !== 'completed') {
            await new Promise(resolve => setTimeout(resolve, 2000)); // wait for 2 seconds
            status = await checkStatus(runId, threadId);
        }
        const response = await openai.beta.threads.messages.list(threadId);
        if (response.data) {
            const assistantMessage = response.data[0].content[0].text.value;
            setConversation([...conversation, { role: 'assistant', content: assistantMessage }]);
        }
        setIsTyping(false);

    }

    
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
                    {conversation.map((message, index) => (
                        <p key={index}><strong>{message.role}:</strong> {message.content}</p>
                    ))}
                </div>
            </section>
            <form action="" onSubmit={(e) => handleUserInput(e.target.value)}>
                <input
                type="text"
                name="message"
                placeholder="Type a message here and hit Enter..."
                onChange={(e) => setMessage(e.target.value)}
                />
            </form>
            
        </>
    );
}

export default Chatbox;