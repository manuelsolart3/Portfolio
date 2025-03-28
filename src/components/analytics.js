import ReactGA from "react-ga4";

// 1. Seguimiento de tiempo en página
export const trackTimeOnPage = () => {
  let startTime = new Date().getTime();

  window.addEventListener("beforeunload", () => {
    const endTime = new Date().getTime();
    const timeSpent = (endTime - startTime) / 1000; // en segundos

    ReactGA.event({
      category: "User Engagement",
      action: "Time Spent",
      label: "Portfolio",
      value: Math.round(timeSpent),
    });
  });
};

// 2. Seguimiento de scroll profundo
export const trackScrollDepth = () => {
  let scrollDepths = [25, 50, 75, 100];
  let scrollDepthTriggered = [];

  window.addEventListener("scroll", () => {
    const scrollPercent = Math.round(
      ((window.scrollY + window.innerHeight) / document.body.scrollHeight) * 100
    );

    scrollDepths.forEach((depth) => {
      if (scrollPercent >= depth && !scrollDepthTriggered.includes(depth)) {
        scrollDepthTriggered.push(depth);
        ReactGA.event({
          category: "Scroll Depth",
          action: "Scroll",
          label: `${depth}%`,
        });
      }
    });
  });
};
