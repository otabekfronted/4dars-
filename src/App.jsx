import "./App.css";
// react-router-dom
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // v6...

// pages
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Form from "./pages/help/Form";
import Articles from "./pages/articles/Articles";
import ArticleDetail from "./pages/articles/ArticleDetail";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./Register";

// layouts
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ArticlesLayout from "./layout/ArticlesLayout";
import Home from "./pages/Home";

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "contact",
                    element: <ContactLayout />,
                    children: [
                        {
                            path: "faq",
                            element: <Faq />,
                        },
                        {
                            path: "form",
                            element: <Form />,
                        },
                    ],
                },
                {
                    path: "articles",
                    element: <ArticlesLayout />,
                    children: [
                        {
                            index: true,
                            element: <Articles />,
                        },
                        {
                            path: ":id",
                            element: <ArticleDetail />,
                        },
                    ],
                },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
    ]);

    return (
        <div className="App  m-0 m-auto">
            <RouterProvider router={routes} />
        </div>
    );
}

export default App;
