import React, { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email } = userData;

    if (firstName && lastName && phone && email) {
      const res = fetch(
        "https://form-submit-eaf27-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
        });
        alert("Data Stored");
      } else {
        alert("Please fill out the data");
      }
    } else {
      alert("Please fill out the data");
    }
  };

  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <form method="POST">
                <div className="row">
                  <div className="col-12 col-lg-6 mb-3">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="form-control"
                      placeholder="First Name"
                      value={userData.firstName}
                      onChange={postUserData}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="form-control"
                      placeholder="Last Name"
                      value={userData.lastName}
                      onChange={postUserData}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6 mb-3">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="form-control"
                      placeholder="Phone Number"
                      value={userData.phone}
                      onChange={postUserData}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email ID"
                      value={userData.email}
                      onChange={postUserData}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  onClick={submitData}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
