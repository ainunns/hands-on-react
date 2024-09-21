import Input from "../components/form/Input";
import * as React from "react";

export default function ContactInput() {
  const formRef = React.useRef(null);

  const handleSubmit = (e) => {
    const form = formRef.current;

    e.preventDefault();
    console.log({
      name: form["name"].value,
      email: form["email"].value,
      img_url: form["img_url"].value || null,
    });
  };

  return (
    <section className="add__contact__container">
      <h2 className="main__container-subheading">Add New Contact</h2>
      <form className="add__contact__container-input" ref={formRef}>
        <Input placeholder="Name" name="name" />
        <Input placeholder="Email" name="email" />
        <Input placeholder="Image URL" name="img_url" />
        <button className="main__container-button" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </section>
  );
}
