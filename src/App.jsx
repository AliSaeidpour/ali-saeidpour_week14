import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import SearchBar from "./components/SearchBar";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingContact, setEditingContact] = useState(null);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [modal, setModal] = useState({ isOpen: false, action: null });

  const handleAdd = (contact) => {
    setContacts([...contacts, contact]);
  };

  const handleEdit = (updatedContact) => {
    setContacts((prev) =>
      prev.map((c) => (c.id === updatedContact.id ? updatedContact : c))
    );
    setEditingContact(null);
  };

  const handleDelete = (id) => {
    setModal({
      isOpen: true,
      action: () => {
        setContacts((prev) => prev.filter((c) => c.id !== id));
        setModal({ isOpen: false, action: null });
      },
    });
  };

  const handleDeleteSelected = () => {
    setModal({
      isOpen: true,
      action: () => {
        setContacts((prev) =>
          prev.filter((c) => !selectedContacts.includes(c.id))
        );
        setSelectedContacts([]);
        setModal({ isOpen: false, action: null });
      },
    });
  };

  const filteredContacts = contacts.filter((c) =>
    [c.firstName, c.lastName, c.email].some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="app">
      <h1>📇 Contact App</h1>

      <SearchBar onSearch={setSearchTerm} />

      <ContactForm
        onAdd={handleAdd}
        onEdit={handleEdit}
        editing={editingContact}
      />

      <ContactList
        contacts={filteredContacts}
        onDelete={handleDelete}
        onEdit={setEditingContact}
        selectedContacts={selectedContacts}
        setSelectedContacts={setSelectedContacts}
      />

      {selectedContacts.length > 0 && (
        <button onClick={handleDeleteSelected}>🗑 Delete Selected</button>
      )}

      {modal.isOpen && (
        <Modal
          onConfirm={() => modal.action()}
          onCancel={() => setModal({ isOpen: false, action: null })}
        />
      )}
    </div>
  );
}

export default App;