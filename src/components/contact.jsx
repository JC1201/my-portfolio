import './contact.css';

export function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form
        action="https://formspree.io/f/xnnzrbyg" // replace with your ID
        method="POST"
        className="contact-form"
      >
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" required />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea name="message" rows="5" required></textarea>
        </div>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}
