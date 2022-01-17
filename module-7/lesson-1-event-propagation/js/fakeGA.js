const body = document.querySelector('body');
const DEFAULT_ANALYTICS_SELECTOR = 'data-analytics';
const analytics = {
  clicks: 0,
};

const analyticsHandler = (event) => {
  const { target } = event;
  const isAnalyticsButton = target.hasAttribute('data-analytics');

  if (!isAnalyticsButton) return;

  analytics.clicks += 1;
  console.log(analytics);
};

body.addEventListener('click', analyticsHandler);
