import React from 'react';
import { Link, useParams } from 'react-router-dom';
const img =
  'https://cdn.pixabay.com/photo/2012/04/18/19/01/check-37583_960_720.png';

function EmailSent() {
  const { uuid, token } = useParams();

  return (
    <>
      <h3 className="text-2xl font-rale mb-2 text-center font-bold">
        Email Sent
      </h3>
      <img src={img} alt="" className="h-24  mx-auto mt-4" />

      <div className="text-left mt-4">
        <p className="mb-2 text-justify text-sm">
          A link to reset your password has been sent to <b>"fab@me.com"</b>
        </p>

        <p className=" text-justify text-sm">
          Did not receive the email? Remember to check <b>Junk/Spam</b> folder
        </p>
      </div>
      <div className="bg-yellow-300 rounded-md text-xs p-2 font-bold">
        <Link
          className="text-primary my-2"
          to={`/accounts/reset-password/${uuid}/${token}`}
        >
          Test
        </Link>
      </div>
    </>
  );
}

export default EmailSent;