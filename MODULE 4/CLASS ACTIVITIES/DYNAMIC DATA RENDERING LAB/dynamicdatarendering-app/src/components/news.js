import { useEffect, useState } from "react";

function News({ goHome }) {

    const [news, setNews] = useState([]);

    useEffect(() => {

        fetch("https://dummyjson.com/posts?limit=8")
            .then(response => response.json())
            .then(data => setNews(data.posts));

    }, []);

    return (

        <div className="page">

            <button className="back" onClick={goHome}>
                ← Back
            </button>

            <h1>📰 News Feed</h1>

            <div className="data-grid">

                {news.map(item => (

                    <div className="data-card" key={item.id}>

                        <h2>{item.title}</h2>

                        <p>{item.body}</p>

                        <span>
                            👍 {item.reactions.likes} Likes
                        </span>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default News;