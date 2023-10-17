const initialState = {
  contacts: [], // Initialize contacts as an empty array
  // ...other state properties
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload], // Add the new contact to the array
      };
    case "UPDATE_CONTACT":
      const updatedContacts = state.contacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      return {
        ...state,
        contacts: updatedContacts,
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    // ...other cases and reducers
    default:
      return state;
  }
};

export default contactReducer;
