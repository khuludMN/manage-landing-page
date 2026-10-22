import { useState } from "react";

const features = [
  {
    number: "01",
    title: "Track company-wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details.",
  },
  {
    number: "02",
    title: "Advanced built-in reports",
    description:
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need.",
  },
  {
    number: "03",
    title: "Everything you need in one place",
    description:
      "Stop jumping between multiple services to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

const testimonials = [
  {
    name: "Anisha Li",
    image: "/images/avatar-anisha.png",
    text: "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
  },
  {
    name: "Ali Bravo",
    image: "/images/avatar-ali.png",
    text: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
  },
  {
    name: "Richard Watts",
    image: "/images/avatar-richard.png",
    text: "Manage allows us to provide structure and process. It keeps us organised and focused. I can't stop recommending them to everyone I talk to!",
  },
  {
    name: "Shanai Gough",
    image: "/images/avatar-shanai.png",
    text: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailMessage("Please enter a valid email address.");
      return;
    }

    setEmailMessage("Thanks! Your email has been submitted.");
    setEmail("");
  }

  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#242d52]">
      {/* Header */}
      <header className="relative z-50 mx-auto flex max-w-6xl items-center justify-between px-6 py-8 lg:px-8">
        <a href="#" aria-label="Manage home">
          <img
            src="/images/logo.svg"
            alt="Manage"
            className="h-6 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          <a className="nav-link" href="#pricing">
            Pricing
          </a>
          <a className="nav-link" href="#product">
            Product
          </a>
          <a className="nav-link" href="#about">
            About Us
          </a>
          <a className="nav-link" href="#careers">
            Careers
          </a>
          <a className="nav-link" href="#community">
            Community
          </a>
        </nav>

        <a href="#get-started" className="button-primary hidden md:inline-flex">
          Get Started
        </a>

        <button
          type="button"
          className="md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src={
              menuOpen
                ? "/images/icon-close.svg"
                : "/images/icon-hamburger.svg"
            }
            alt=""
            className="h-6 w-6"
          />
        </button>

        {menuOpen && (
          <>
            <button
              type="button"
              aria-label="Close navigation menu"
              className="fixed inset-0 top-20 z-40 bg-black/30 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <nav className="absolute left-6 right-6 top-20 z-50 flex flex-col gap-5 rounded-md bg-white px-6 py-8 text-center font-bold shadow-xl md:hidden">
              {[
                ["Pricing", "#pricing"],
                ["Product", "#product"],
                ["About Us", "#about"],
                ["Careers", "#careers"],
                ["Community", "#community"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}

              <a
                href="#get-started"
                className="button-primary mx-auto mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </>
        )}
      </header>

      {/* Hero */}
      <main>
        <section
          id="product"
          className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-20 pt-8 md:grid-cols-2 md:gap-12 md:pb-28 md:pt-12 lg:px-8"
        >
          <div
  aria-hidden="true"
  className="pointer-events-none absolute -right-40 -top-40 -z-0 h-[600px] w-[600px] bg-contain bg-no-repeat opacity-60"
  style={{
    backgroundImage: "url('/images/bg-tablet-pattern.svg')",
  }}
/>
          <div
            className="pointer-events-none absolute -right-40 -top-40 -z-10 hidden h-[600px] w-[600px] bg-contain bg-no-repeat md:block"
            style={{
              backgroundImage: "url('/images/bg-tablet-pattern.svg')",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 order-2 text-center md:order-1 md:text-left">
            <h1 className="mx-auto max-w-xl text-4xl font-bold leading-tight tracking-tight md:mx-0 md:text-5xl lg:text-6xl">
              Bring everyone together to build better products.
            </h1>

            <p className="mx-auto mb-8 mt-6 max-w-md leading-7 text-[#9095a7] md:mx-0">
              Manage makes it simple for software teams to plan day-to-day
              tasks while keeping the larger team goals in view.
            </p>

            <a href="#get-started" className="button-primary">
              Get Started
            </a>
          </div>

           <div className="relative z-10 order-1 md:order-2">
            <img
              src="/images/illustration-intro.svg"
              alt="Manage team analytics dashboard"
              className="mx-auto w-full max-w-lg"
            />
          </div>
        </section>

        {/* Features */}
        <section
          id="about"
          className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-20 md:grid-cols-2 md:gap-16 md:pb-28 lg:px-8"
        >
          <div>
            <h2 className="mx-auto max-w-md text-center text-3xl font-bold leading-tight md:mx-0 md:text-left md:text-4xl">
              What's different about Manage?
            </h2>

            <p className="mx-auto mt-6 max-w-md text-center leading-7 text-[#9095a7] md:mx-0 md:text-left">
              Manage provides all the functionality your team needs, without
              the complexity. Our software is tailor-made for modern digital
              product teams.
            </p>
          </div>

          <div className="space-y-9">
            {features.map((feature) => (
              <article key={feature.number}>
                <div className="mb-3 flex items-center gap-3 rounded-l-full bg-[#fff0ec] md:gap-5 md:bg-transparent">
                  <span className="rounded-full bg-[#f3603c] px-6 py-2.5 font-bold text-white">
                    {feature.number}
                  </span>

                  <h3 className="text-sm font-bold md:text-base">
                    {feature.title}
                  </h3>
                </div>

                <p className="pl-0 text-sm leading-7 text-[#9095a7] md:pl-[5.5rem] md:text-base">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>

          <div
            className="pointer-events-none absolute -left-96 bottom-0 -z-10 hidden h-[500px] w-[500px] bg-contain bg-no-repeat lg:block"
            style={{
              backgroundImage: "url('/images/bg-tablet-pattern.svg')",
            }}
            aria-hidden="true"
          />
        </section>

        {/* Testimonials */}
        <section className="pb-20 text-center md:pb-28">
          <h2 className="mb-20 px-6 text-3xl font-bold md:text-4xl">
            What they've said
          </h2>

          <div className="mx-auto grid max-w-7xl gap-20 px-6 md:grid-cols-3 md:gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <article
                key={testimonial.name}
                className="relative bg-[#fafafa] px-6 pb-8 pt-12"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2"
                />

                <h3 className="mb-4 font-bold">{testimonial.name}</h3>

                <p className="text-sm leading-7 text-[#9095a7]">
                  "{testimonial.text}"
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2 md:hidden">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => setTestimonialIndex(index)}
                className={`h-2.5 w-2.5 rounded-full border border-[#f3603c] ${
                  testimonialIndex === index
                    ? "bg-[#f3603c]"
                    : "bg-white"
                }`}
              />
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-sm px-6 md:hidden">
            <article className="relative mt-10 bg-[#fafafa] px-6 pb-8 pt-12">
              <img
                src={testimonials[testimonialIndex].image}
                alt={testimonials[testimonialIndex].name}
                className="absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2"
              />

              <h3 className="mb-4 font-bold">
                {testimonials[testimonialIndex].name}
              </h3>

              <p className="text-sm leading-7 text-[#9095a7]">
                "{testimonials[testimonialIndex].text}"
              </p>
            </article>
          </div>

          <a href="#get-started" className="button-primary mt-10">
            Get Started
          </a>
        </section>

        {/* Call to Action */}
        <section
          id="get-started"
          className="relative overflow-hidden bg-[#f3603c] px-6 py-16 text-center md:py-20"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-contain bg-left bg-no-repeat opacity-10"
            style={{
              backgroundImage:
                "url('/images/bg-simplify-section-desktop.svg')",
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
            <h2 className="max-w-lg text-4xl font-bold leading-tight text-white md:text-left md:text-5xl">
              Simplify how your team works today.
            </h2>

            <a
              href="#"
              className="inline-flex rounded-full bg-white px-8 py-3 font-bold text-[#f3603c] shadow-md transition hover:bg-white/90"
            >
              Get Started
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1d1e25] px-6 py-12 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3 md:items-start lg:grid-cols-4 lg:px-8">
          <div className="flex flex-col items-center gap-8 md:items-start">
            <a href="#" aria-label="Manage home">
              <img
                src="/images/logo.svg"
                alt="Manage"
                className="h-6 w-auto brightness-0 invert"
              />
            </a>
            <div className="flex items-center gap-6">
              {[
                ["icon-facebook.svg", "Facebook"],
                ["icon-youtube.svg", "YouTube"],
                ["icon-twitter.svg", "Twitter"],
                ["icon-pinterest.svg", "Pinterest"],
                ["icon-instagram.svg", "Instagram"],
              ].map(([icon, name]) => (
                <a key={name} href="#" aria-label={name}>
                  <img
                    src={`/images/${icon}`}
                    alt=""
                    className="h-5 w-5 transition hover:opacity-70"
                  />
                </a>
              ))}
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-4 text-sm md:col-span-1">
            <a href="#product" className="footer-link">
              Home
            </a>
            <a href="#pricing" className="footer-link">
              Pricing
            </a>
            <a href="#about" className="footer-link">
              About Us
            </a>
            <a href="#careers" className="footer-link">
              Careers
            </a>
            <a href="#community" className="footer-link">
              Community
            </a>
            <a href="#product" className="footer-link">
              Products
            </a>
          </nav>

          <div className="md:col-span-1 lg:col-span-2">
            <form
              onSubmit={handleSubscribe}
              className="flex items-start gap-2"
            >
              <div className="flex-1">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setEmailMessage("");
                  }}
                  placeholder="Updates in your inbox..."
                  className="w-full rounded-full border border-transparent px-5 py-3 text-sm text-[#242d52] outline-none focus:border-[#f3603c]"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-[#f3603c] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#f87960]"
              >
                Go
              </button>
            </form>

            {emailMessage && (
              <p className="mt-3 text-xs text-white" role="status">
                {emailMessage}
              </p>
            )}

            <p className="mt-8 text-center text-xs text-[#9095a7] md:text-right">
              Copyright {new Date().getFullYear()}. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;