import { useState, useEffect } from "react";

function ContactForm({ onAdd, onEdit, editing }) {
  const [contact, setContact] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editing) {
      setContact(editing);
      setErrors({});
    }
  }, [editing]);

  const validate = () => {
    const err = {};
    if (!contact.firstName.trim()) err.firstName = "First name is required";
    if (!contact.lastName.trim()) err.lastName = "Last name is required";
    if (!/\S+@\S+\.\S+/.test(contact.email)) err.email = "Email is invalid";
    if (!/^\d{10,15}$/.test(contact.phone))
      err.phone = "Phone must be 10 to 15 digits";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }

    if (contact.id) {
      onEdit(contact);
    } else {
      onAdd({ ...contact, id: Date.now().toString() });
    }

    setContact({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        value={contact.firstName}
        onChange={(e) =>
          setContact({ ...contact, firstName: e.target.value })
        }
        placeholder="First Name"
      />
      {errors.firstName && <small>{errors.firstName}</small>}

      <input
        value={contact.lastName}
        onChange={(e) =>
          setContact({ ...contact, lastName: e.target.value })
        }
        placeholder="Last Name"
      />
      {errors.lastName && <small>{errors.lastName}</small>}

      <input
        value={contact.email}
        onChange={(e) => setContact({ ...contact, email: e.target.value })}
        placeholder="Email"
      />
      {errors.email && <small>{errors.email}</small>}

      <input
        value={contact.phone}
        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
        placeholder="Phone Number"
      />
      {errors.phone && <small>{errors.phone}</small>}

      <button type="submit">{contact.id ? "Edit Contact" : "Add Contact"}</button>
    </form>
  );
}

export default ContactForm;