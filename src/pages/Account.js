import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Account = () => {
  const navigate = useNavigate();
  const logout = () => {
    toast('You are logged out', { type: 'success' });
    navigate('/login');
  };
  return (
    <div>
      <main className="flex flex-row">
        <aside className="bg-gray-400 w-3/10 py-20 px-3">
          <ul>
            <Link to="/account">
              <li className="py-1 px-2 bg-green-200 font-bold my-1 rounded-md cursor-pointer">
                Dashboard
              </li>
            </Link>
            <li className="py-1 px-2 bg-green-200 font-bold my-1 rounded-md cursor-pointer">
              Profile
            </li>
            <li className="py-1 px-2 bg-primary font-bold my-1 rounded-md cursor-pointer">
              Notifications
            </li>
          </ul>

          <button
            onClick={logout}
            className="py-1 px-3 bg-red-500 font-bold rounded-md cursor-pointer mt-10"
          >
            Logout
          </button>
        </aside>
        <section className="w-7/10 bg-blue flex items-center justify-center  w-full">
          <h1 className="font-bold">
            This is the notification board for logged in user
          </h1>
        </section>
      </main>
    </div>
  );
};

export default Account;