import ContactItem from "./ContactItem";

function ContactList({
  contacts,
  onDelete,
  onEdit,
  selectedContacts,
  setSelectedContacts,
}) {
  const toggleSelect = (id) => {
    setSelectedContacts((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
          onEdit={onEdit}
          isSelected={selectedContacts.includes(contact.id)}
          toggleSelect={toggleSelect}
        />
      ))}
    </ul>
  );
}

export default ContactList;
