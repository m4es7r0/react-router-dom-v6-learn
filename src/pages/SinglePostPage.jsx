import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

export const SinglePostPage = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState(null)

    const goBack = () => navigate(-1)
 
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id])

  return (
    <div>
        <button onClick={goBack} >Go back</button>
        {post && (
            <>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <Link to={`/posts/${id}/edit`}>Edit this post</Link>
            </>
        )}
    </div>
  )
}