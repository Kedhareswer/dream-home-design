import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
  };

  return (
    <section id="contact" className="py-32 px-6 text-center bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6 text-foreground">
          Ready to build something lasting?
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
          Schedule a consultation with our team. We'll discuss your project, budget, and how we can bring your vision to life.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all placeholder:text-muted-foreground bg-card border-border"
            />
          </div>
          <button
            type="submit"
            className="w-full font-medium rounded-md px-4 py-3 text-sm transition-colors flex justify-center items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Request Consultation
          </button>
          <p className="text-xs text-center mt-4 text-muted-foreground">
            No spam. No pressure. Just professional advice.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
