import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app.css';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import SkeletonScreen from './components/SkeletonScreen.js';
import Account from './pages/Account.js';
import AccountRouter from './pages/accounts/AccountRouter.js';
import LandingPage from './pages/LandingPage.js';
import Login from './pages/Login.js';
import { store } from './redux/store.js';
import { useLoader } from './useLoader.js';

function App() {
  const { loading } = useLoader();

  return (
    <div className="App min-h-screen h-full">
      {loading && <SkeletonScreen />}
      {!loading && (
        <div>
          <Provider store={store}>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/account" element={<Account />} />
                <Route
                  exact={false}
                  path="/accounts/*"
                  element={<AccountRouter />}
                />
              </Routes>
              <Footer />
            </BrowserRouter>
            <ToastContainer theme="colored" />
          </Provider>
        </div>
      )}
    </div>
  );
}

export default App;
