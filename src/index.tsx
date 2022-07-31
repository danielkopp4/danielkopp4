import React from 'react';
import ReactDOM from 'react-dom/client';
import "./common/Theme.scss";
import { HomePage } from './views/HomePage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ViewPostsPage } from './views/ViewPosts';
import { Resume } from './views/Resume';
import { ViewProjectPage } from './views/ViewProjects';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let routeDict = {
    // "/post/*": (<ViewPostsPage url="/post" />),
    // "/project/*": (<ViewProjectPage url="/project" />),
    "/resume": (<Resume />),
    "*": (<HomePage />)
}

const buildRoutes = (routeDict: {[key: string]: React.ReactNode}) => {
    let out: Array<React.ReactNode> = [];
    
    Object.keys(routeDict).forEach((path: string) => {
        out.push((
            <Route key={path} path={path} element={routeDict[path]} />
        ));
    });

    return out;
}

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                {buildRoutes(routeDict)}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
