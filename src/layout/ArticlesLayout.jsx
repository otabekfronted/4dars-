import { Outlet } from "react-router-dom";

function ArticlesLayout() {
    return (
        <div>
            <h2 className="text-center">My Articles</h2>
            <hr />
            <Outlet />
        </div>
    );
}

export default ArticlesLayout;
