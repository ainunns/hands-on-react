import ContactItem from "../components/ContactItem";
import * as React from "react";

export default function ContactList() {
  const [contacts, setContacts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.BASE_URL}/api/contacts`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
          },
        });
        const data = await response.json();
        setContacts(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="contact__list__container">
      <h2 className="main__container-subheading">Contact List</h2>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          imgUrl={contact.img_url}
          name={contact.name}
          email={contact.email}
        />
      ))}
    </section>
  );
}
