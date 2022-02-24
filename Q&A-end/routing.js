const rootRef = document.querySelector('#root');

const HomePage = () => {
  return `<h1>Home Page</h1>`;
};

const ContactsPage = () => {
  return `<h1>Contacts Page</h1>`;
};

const routes = [
  {
    path: '/',
    template: HomePage,
  },
  {
    path: '/contacts',
    template: ContactsPage,
  },
];

const locationUrl = window.location.pathname;

const renderPage = (pageUrl) => {
  const page = routes.find((route) => route.path === pageUrl);

  if (!page) {
    console.error('404 page not found');
    return;
  }

  rootRef.innerHTML = page.template();
};

renderPage(locationUrl);

// routing
// controller
// services
