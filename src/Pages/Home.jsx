import React, { useState } from "react";
import Post from "./Post";

const Home = ({ onAddNotification }) =>{
    const [chatmessage, setchatmessage] = useState('')

    const handlechatkeydown = (s) => {
        if(e.key === 'Enter' && chatmessage.trim() !== '') {
        onAddNotification(`new message: ${chatmessage}`)
        setchatmessage('')
        }
    };

    const posts = ['post1', 'post2', 'post3']

    return(
        <div className="md:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 p-4 space-x-4 overflow-x-auto">
                {['red', 'blue', 'green', 'yelow', 'purple'].map(color => (
                    <div key={color} className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300  border-pink-500 flex item-center justify-center">
                      <span className="text-white text-xs uppercase">{color}</span>

                    </div>
                ))}
            </div>
            {posts.map(post =>(
                <Post 
                key={post}
                post={post}
                chatmessage={chatmessage}
                onchatmessagechange={setchatmessage}
                onchatkeydown={handlechatkeydown}
/>
            ))}
        </div>
    )
};

export default Home;