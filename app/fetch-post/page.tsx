import { useState, useEffect } from "react";

export default function FetchPostsPage() {
  const [posts, setPosts] = useState([]);
  const [error, setErrors] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/external")
      .then((res) => res.json())
      .then((data) => {
        if (data.sucess) {
          setPosts(data.data);
        } else {
          setErrors(data.message);
        }
      })
      .catch((err) => setErrors('An expeceted error'))
      .finally(()=> setLoading(false))
  },[]);
  return (
    <div>
    <h1>Posts</h1>
    <ul>
        {posts.map((post: {id: number; title:string}) => (
            <li key={post.id}>{post.title}</li>
        ))}
    </ul>
    </div>
  )
}
