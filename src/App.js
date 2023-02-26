import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';

import { publicRoutes, privateRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout';
import { Context } from 'Context';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGPpKaW789xmlYJj01TSgcdd8imQYHf2o",
  authDomain: "shoes-8017b.firebaseapp.com",
  projectId: "shoes-8017b",
  storageBucket: "shoes-8017b.appspot.com",
  messagingSenderId: "633957389525",
  appId: "1:633957389525:web:cef607591b862e4e027e5c",
  measurementId: "G-KR21Y4S08H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    authenticated === true ? (
                                        <DefaultLayout>
                                            <Page />
                                        </DefaultLayout>
                                    ) : (
                                        <Navigate to="/" replace />
                                    )
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
