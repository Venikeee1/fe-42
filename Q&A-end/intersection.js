const DEFAULT_OPTIONS = {
  rootMargin: '-100px 0px -200px 0px',
  threshold: 0.3,
};

const intersectionObserver = (ref, callback, options = DEFAULT_OPTIONS) => {
  const observer = new IntersectionObserver(callback, options);
  const observers = Array.isArray(ref) ? ref : [ref];

  for (const item of observers) {
    observer.observe(item);
  }

  return observer;
};

const animateItem = (itemRef) => {
  const timeline = gsap.timeline();
  const textRef = itemRef.querySelector('.item-description');
  const titleRef = itemRef.querySelector('.item-title');

  timeline
    .to(itemRef, {
      y: '0px',
      opacity: 1,
      duration: 1,
    })
    .to(
      [titleRef, textRef],
      {
        opacity: 1,
        duration: 1,
        x: 0,
        stagger: 0.5,
      },
      '-=0.3'
    );
};

const callback = function (entries, observer) {
  for (const entry of entries) {
    const { isIntersecting, target } = entry;

    if (isIntersecting) {
      animateItem(target);
      observer.unobserve(target);
    }
  }
};

const itemsRef = Array.from(document.querySelectorAll('.item'));

intersectionObserver(itemsRef, callback);
