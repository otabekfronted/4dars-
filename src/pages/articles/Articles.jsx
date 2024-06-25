import { useFetch } from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";
function Articles() {
    const {
        data: articles,
        isPending,
        error,
    } = useFetch([
        "https://online-json-server-api.up.railway.app/project/6678dd1c1d2cd3eb1143fe10/articles",
    ]);
    return (
        <div className="article-container">
            {isPending && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}

            {articles &&
                articles.data.map((article) => {
                    return (
                        <div className="card" key={article.id}>
                            <h3>Title: {article.title}</h3>
                            <p>
                                Author: <i>{article.author}</i>
                            </p>

                            <NavLink to={`/articles/${article.id}`}>
                                Read More
                            </NavLink>
                        </div>
                    );
                })}
        </div>
    );
}

export default Articles;
