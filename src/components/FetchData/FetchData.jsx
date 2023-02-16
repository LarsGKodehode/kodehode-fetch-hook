import { useState } from "react"
import useFetch from "../../hooks/useFetch"

function FetchData() {
  const [postNumber, setPostNumber] = useState(1)
  const { isLoading, error, data } = useFetch("https://dummyjson.com/posts/" + postNumber)

  function nextPost() {
    setPostNumber(
      (oldPost) => oldPost + 1
    )
  }

  return (
    <div>
      <h4>Fetch Data Component</h4>
      <button onClick={nextPost}>Next Post</button>

      <article>
        {
          isLoading
            ? <h5>Loading post</h5>
            : error
              ? <h5>Error</h5>
              :
              <>
                <h5>{data.title}</h5>
                <p>{data.body}</p>
              </>
        }
      </article>

    </div>
  )
}

export default FetchData