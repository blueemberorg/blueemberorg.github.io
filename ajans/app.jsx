// app.jsx — kök bileşen
function App() {
  var W = window;
  return (
    <React.Fragment>
      <W.Hero />
      <W.ClientLogos />
      <W.Commitments />
      <W.Showcase />
      <W.AppFeatures />
      <W.Sectors />
      <W.WhiteLabel />
      <W.Package />
      <W.Integrations />
      <W.IntegrationWall />
      <W.Process />
      <W.Revenue />
      <W.QuickAnswers />
      <W.Compare />
      <W.Plans />
      <W.Services />
      <W.Testimonials />
      <W.FAQ />
      <W.RequestForm />
    </React.Fragment>
  );
}

var rootEl = document.getElementById('root');
if (rootEl && !rootEl.dataset.mounted) {
  rootEl.dataset.mounted = '1';
  ReactDOM.createRoot(rootEl).render(<App />);
}
