// app.jsx — kök bileşen
function App() {
  var W = window;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(W.Hero, null), /*#__PURE__*/React.createElement(W.ClientLogos, null), /*#__PURE__*/React.createElement(W.Commitments, null), /*#__PURE__*/React.createElement(W.Showcase, null), /*#__PURE__*/React.createElement(W.AppFeatures, null), /*#__PURE__*/React.createElement(W.Sectors, null), /*#__PURE__*/React.createElement(W.WhiteLabel, null), /*#__PURE__*/React.createElement(W.Package, null), /*#__PURE__*/React.createElement(W.Integrations, null), /*#__PURE__*/React.createElement(W.IntegrationWall, null), /*#__PURE__*/React.createElement(W.Process, null), /*#__PURE__*/React.createElement(W.Revenue, null), /*#__PURE__*/React.createElement(W.QuickAnswers, null), /*#__PURE__*/React.createElement(W.Compare, null), /*#__PURE__*/React.createElement(W.Plans, null), /*#__PURE__*/React.createElement(W.Services, null), /*#__PURE__*/React.createElement(W.Testimonials, null), /*#__PURE__*/React.createElement(W.FAQ, null), /*#__PURE__*/React.createElement(W.RequestForm, null));
}
var rootEl = document.getElementById('root');
if (rootEl && !rootEl.dataset.mounted) {
  rootEl.dataset.mounted = '1';
  ReactDOM.createRoot(rootEl).render(/*#__PURE__*/React.createElement(App, null));
}