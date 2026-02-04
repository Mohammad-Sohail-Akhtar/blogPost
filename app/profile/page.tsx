/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { ChangeEvent, FormEvent, useState } from "react"
import axios from 'axios'
import toast from "react-hot-toast"


interface IForm {
  title: string,
  description: string,
  author: string,
  file: File | null
}

const ProfilePage = () => {

  const [form, setForm] = useState<IForm>({
    title: '',
    description: '',
    author: '',
    file: null
  })

  const [ loading, setLoading ] = useState<boolean>(false)

  const handleEvent = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm((prev)=>({
      ...prev,
      [name] : value,
    }))
  }

  const handleFileChange = (e:ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;

    setForm((prev)=>({
      ...prev,
      file: selectedFile
    }))
  }

  const handleSubmit = async(e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { title, description, author, file } = form;

    if(!title || !description || !author || !file){
      alert("All fieds are required");
      return
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('author', author)


    try {
      setLoading(true);

      const res = await axios.post('/api/users/blogPost', formData)

      toast.success("Blog Created successfully", res.data)

      setForm({
            title: "",
            description: "",
            author: "",
            file: null,
        });

    } catch (error:any) {
      if (error.response?.data?.error) {
            alert(error.response.data.error);
        } else {
            alert("Something went wrong");
        }
    } finally{
      setLoading(false)
    }

  }

  return (
    <>
     <div className="mt-5 mx-56">
      <form onSubmit={handleSubmit}>
          <input 
          type='text'  
          placeholder="Title"
          name='title'
          value={form.title}
          onChange={handleEvent}
          />

          <br />
          <br />

          <textarea 
          placeholder="Description on blog"
          name='description'
          value={form.description}
          onChange={handleEvent}
          />
          <br />
          <br />

          <input 
          type='text'  
          placeholder="Author"
          name='author'
          value={form.author}
          onChange={handleEvent}
          />
          <br />
          <br />

          <input 
          type='file'  
          accept="image"
          onChange={handleFileChange}
          />
         
          
          <br />
          <br />

          <button type="submit" disabled={loading}>
            {loading ? 'Uploading...': 'Create Blog'}
          </button>

        </form>
     </div>
        
    </>
    
  )
}

export default ProfilePage