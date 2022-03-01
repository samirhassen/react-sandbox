import React, {useState} from 'react'
import { useEffect } from 'react';

function FormComponent() {
    const [title, setTitle] = useState('Mad Villan');
    const [content, setContent] = useState('');
    const [errorTitle, setError] = useState('');

    const handleSubmit = ((event) => {
        if(title.length < 8) {
            event.preventDefault();
            setError("Title is to short");
        }
    });

  return (
        <div>
            <h1 className='title'>Create Blog</h1>
            <form className='form' onSubmit={handleSubmit}>
                 <input placeholder='Write a title' type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                 <textarea placeholder='Write a text' value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <button>Create</button>
            </form>
            <p>{title}</p>
            <p>{content}</p>
            <h3>{errorTitle}</h3>
        </div>

  )
}

export default FormComponent