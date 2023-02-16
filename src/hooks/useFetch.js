import { useEffect, useState } from "react"

/**
 * 
 */
function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(
    () => {
      async function getData() {
        // Fetch might fail so we are wrapping it inside this
        // try catch block
        try {
          const response = await fetch(url)

          // Response might be bad, check for that here
          if (!response.ok) {
            setError("Response not OK")
            setIsLoading(false)
            return
          }

          // Yheay we have data
          const data = await response.json()
          setData(data)
          setIsLoading(false)

        } catch (error) {
          // Network, server down or faulty URL
          setError(error)
          setIsLoading(false)
        }
      }

      setIsLoading(true)
      getData()
    },
    [url]
  )

  return {
    isLoading,
    error,
    data
  }
}

export default useFetch