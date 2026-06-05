// app.jsx — kök bileşen
function App() {
  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <React.Fragment>
      <Hero />
      <Stats />
      <Showcase />
      <Services />
      <Tech />
      <Testimonials />
      <FAQ />
      <RequestForm />
      <Contact />
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
