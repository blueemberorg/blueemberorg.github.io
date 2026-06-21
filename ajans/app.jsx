// app.jsx — kök bileşen
function App() {
  var Hero = window.Hero;
  var Stats = window.Stats;
  var Showcase = window.Showcase;
  var Services = window.Services;
  var Tech = window.Tech;
  var Testimonials = window.Testimonials;
  var FAQ = window.FAQ;
  var RequestForm = window.RequestForm;

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
    </React.Fragment>
  );
}

var rootEl = document.getElementById('root');
if (rootEl && !rootEl.dataset.mounted) {
  rootEl.dataset.mounted = '1';
  ReactDOM.createRoot(rootEl).render(<App />);
}
