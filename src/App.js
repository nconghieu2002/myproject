import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';

import { publicRoutes, privateRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout';
import { Context } from 'Context';
import Admin from 'pages/Admin';
import Home from 'pages/Home';

function App() {
    const { authenticated } = useContext(Context);
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <DefaultLayout>
                                        <Page />
                                    </DefaultLayout> 
                                }
                            />
                        );
                    })}
                    {privateRoutes.map((route, index) => {
                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<Admin />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
