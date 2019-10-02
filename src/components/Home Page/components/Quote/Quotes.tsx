import React from "react";

class Typography extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      quotes: []
    };
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/Himadu2000/data/db")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            quotes: result.data1.Quote
          });
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, quotes } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <center>
          <div className='spinner-grow text-success' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </center>
      );
    } else {
      return (
        <>
          <ul>
            {quotes.map(quote => (
              <li key={quote.title} style={{ listStyleType: "none" }}>
                <blockquote
                  className='blockquote text-center'
                  style={{ border: 0 }}>
                  <p className='mb-0'>{quote.data}</p>
                  <footer className='blockquote-footer mb-3'>
                    {quote.title}
                    <cite title='Source Title'>({quote.source})</cite>
                  </footer>
                </blockquote>
              </li>
            ))}
          </ul>
        </>
      );
    }
  }
}

export default Typography;
