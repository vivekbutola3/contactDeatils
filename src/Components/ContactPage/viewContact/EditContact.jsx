import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import SideBar from "../../Sidebar/sideBar";

const EditContact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("active");

  const { id } = useParams();

  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );
  console.log(currentContact);
  useEffect(() => {
    if (currentContact) {
      setFirstName(currentContact.firstName);
      setLastName(currentContact.lastName);
      setStatus(currentContact.active);
    }
  }, [currentContact]);

  const handelSubmit = (e) => {
    e.preventDefault();

    const checklastName = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.lastName === lastName
    );

    if (!firstName || !lastName) {
      return toast.warning("Please fill in all fields!");
    }

    if (checklastName) {
      return toast.error("This email already Exists!");
    }

    const data = {
      id: parseInt(id),
      firstName,
      lastName,
      active: status === "active",
    };

    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Contact updated successfully!!");
    navigate("/");
  };

  return (
    <>
      <SideBar />
      <div className="absolute top-0 left-64">
        <div className="container">
          {currentContact ? (
            <>
              <h1 className="display-3 text-center fw-bold">
                Edit Contact {id}
              </h1>
              <div className="row">
                <div className="col-md-6 shadow mx-auto p-5">
                  <form className="text-center" onSubmit={handelSubmit}>
                    <div className="form-group mb-3">
                      <label htmlFor="name" className="text-gray-600">
                        First Name:
                      </label>
                      <input
                        type="text"
                        placeholder="Firstname"
                        className="form-control border py-1 px-1"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="name" className="text-gray-600">
                        Last Name:
                      </label>
                      <input
                        type="text"
                        placeholder="Lastname"
                        className="form-control border py-1 px-1"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="text-gray-600">Status:</label>
                      <div className="flex justify-around">
                        <label>
                          <input
                            type="radio"
                            name="status"
                            value="active"
                            checked={status === "active"}
                            onChange={() => setStatus("active")}
                          />
                          Active
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="status"
                            value="inactive"
                            checked={status === "inactive"}
                            onChange={() => setStatus("inactive")}
                          />
                          Inactive
                        </label>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <button
                        type="submit"
                        value="Update Contact"
                        className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
                      >
                        {" "}
                        Update Contact
                      </button>

                      <Link to="/" className="btn btn-danger ms-3 ">
                        <button className="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-600">
                          Cancel
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </>
          ) : (
            <h1 className="display-3 my-5 text-center fw-bold">
              Contact with id {id} does not exists!!
            </h1>
          )}
        </div>{" "}
      </div>
    </>
  );
};

export default EditContact;
