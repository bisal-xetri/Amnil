export const Contact = () => {
  const handleFormSubmit=(formData)=>{
// console.log(formData.entries())
const formInputData=Object.fromEntries(formData.entries())
console.log(formInputData)
  }
  return (
    <section className="section-class">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            required
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
          />
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your Email"
            autoComplete="off"
          />
          <textarea
            className="form-control"
            name="message"
            rows="10"
            autoComplete="off"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};
