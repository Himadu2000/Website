import React, { useEffect, useState } from "react"

const Quotes = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Himadu2000/data/db")
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true)
          setQuotes(result.data1.Quote)
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          setIsLoaded(true)
          setError(error)
        }
      )
  })

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return (
      <div className="spinner-grow text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )
  } else {
    return (
      <>
        <ul>
          {quotes.map(quote => (
            <li key={quote.title} style={{ listStyleType: "none" }}>
              <blockquote
                className="blockquote text-center"
                style={{ border: 0 }}
              >
                <p className="mb-0">{quote.data}</p>
                <footer className="blockquote-footer mb-3">
                  {quote.title}
                  <cite title="Source Title">({quote.source})</cite>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default Quotes
