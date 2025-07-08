function ContactItem({ contact, onDelete, onEdit, isSelected, toggleSelect }) {
  return (
    <li className="contact-item">
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => toggleSelect(contact.id)}
      />
      <div>
        <strong>
          {contact.firstName} {contact.lastName}
        </strong>{" "}
        <br />
        📧 {contact.email} <br />
        📞 {contact.phone}
      </div>
      <button onClick={() => onEdit(contact)}>✏️</button>
      <button onClick={() => onDelete(contact.id)}>🗑</button>
    </li>
  );
}
export default ContactItem;
