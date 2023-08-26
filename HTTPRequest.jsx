import React, { useEffect, useState } from "react";

export default function HTTPRequest() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  //! HTTP is a protocol that allows us to send and receive data over the internet. It stands for HyperText Transfer Protocol.
  //! HTTP is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser.
  //! HTTP is a stateless protocol, which means that the server does not keep any data (state) between two requests from the same client.

  function getPosts() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // Make the HTTP request when the component mounts
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <h1 className="title">HTTP Request</h1>

      {/* On Demand */}
      <button className="btn" onClick={getPosts}>
        Get Posts
      </button>
      {/* On Load / on component mount */}
      {loading ? (
        <h2 className="mt-2">LOADING...</h2>
      ) : (
        <ul className={dataStyle}>
          {data.map((item) => (
            <li className="alert alert-info" key={item.id}>
              <div className="mr-1">{item.id}</div>
              <h3>{item.title}</h3>
              <p className="text-gray">{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
