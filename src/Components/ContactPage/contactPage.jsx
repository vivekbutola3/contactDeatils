import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../actions/contactAction"; // Assuming you have the action creator for adding contacts
import SideBar from "../Sidebar/sideBar";

const ContactPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("active"); // Initially set to "active"
  const contacts = useSelector((state) => state.contacts || []); // Ensure contacts is not undefined
  const dispatch = useDispatch();

  const handleAddContact = (e) => {
    e.preventDefault();

    // Check if 'contacts' is empty or undefined and set 'id' accordingly
    const id = contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1;

    const newContact = {
      id,
      firstName,
      lastName,
      active: status === "active",
    };

    // Dispatch the action to add the contact
    dispatch(addContact(newContact));

    // Clear the form fields and reset the status to "active"
    setFirstName("");
    setLastName("");
    setStatus("active");
  };

  return (
    <>
      {" "}
      <SideBar />
      <div className="absolute top-0 left-64">
        <div className="flex flex-col h-full">
          {" "}
          <div className="flex flex-col bg-white p-6 w-96 h-96 rounded shadow ">
            {" "}
            <h2 className="text-3xl font-semibold p-2 mb-10 ">
              ADD NEW CONTACT
            </h2>
            <form className="flex flex-col " onSubmit={handleAddContact}>
              <h3 className="text-xl mb-6">Create Contact</h3>
              <div className="mb-4">
                <label htmlFor="name" className="text-gray-600">
                  First Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="border rounded-md p-2"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="text-gray-600">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="border rounded-md p-2"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="text-gray-600">Status:</label>
                <div>
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
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
