import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "../../Sidebar/sideBar";
import EditContactModal from "./EditContact";
import DeleteConfirmationModal from "./DeleteContact";
import { deleteContact, updateContact } from "../../../actions/contactAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ViewContact = () => {
  const navigate = useNavigate();
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact deleted successfully!");
  };

  return (
    <>
      <SideBar />
      <div className="absolute top-0 left-64">
        <div className="flex flex-col ">
          <h2 className="text-3xl font-semibold p-2">View Contacts</h2>
          <div className="flex flex-col">
            {contacts && contacts.length > 0 ? (
              contacts.map((contact, id) => (
                <div key={id} className="bg-gray-200 p-3 my-2 rounded">
                  <h3 className="text-lg font-semibold">
                    {contact.firstName} {contact.lastName}
                  </h3>
                  <p className="text-gray-600">
                    Active: {contact.active ? "Yes" : "No"}
                  </p>
                  <div className="mt-2">
                    <button
                      onClick={() =>
                        navigate(`/edit-contact-details/${contact.id}`)
                      }
                      className="bg-blue-500 text-white py-1 px-2 rounded mr-2 hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteContact(contact.id)}
                      className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No contact details found. Please add a contact.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewContact;
