const ready = (fn) => {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
};

ready(() => {
  const words = [
    "the billionaires",
    "the ads",
    "the algorithms",
    "the investors",
    "the crypto",
    "the AI",
    "the venture capital",
    "the NFTs",
  ];

  let current = 0;
  const line2 = document.querySelector(".line-2");

  const nextWord = () => {
    line2.textContent = words[current];
    const split = SplitText.create(line2, { type: "chars" });

    gsap.fromTo(
      split.chars,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.1,
        stagger: 0.02,
        onComplete: () => {
          gsap.delayedCall(2, () => {
            gsap.to(split.chars, {
              opacity: 0,
              y: -20,
              duration: 0.1,
              stagger: 0.02,
              onComplete: () => {
                split.revert();
                current = (current + 1) % words.length;
                nextWord();
              },
            });
          });
        },
      },
    );
  };

  nextWord();

  var _paq = (window._paq = window._paq || []);
  _paq.push(["setExcludedQueryParams", ["token"]]);
  _paq.push(["trackPageView"]);
  _paq.push(["enableLinkTracking"]);
  (function () {
    var u = "//matomo.stefanbohacek.com/";
    _paq.push(["setTrackerUrl", u + "matomo.php"]);
    _paq.push(["setSiteId", "33"]);
    var d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0];
    g.async = true;
    g.src = u + "matomo.js";
    s.parentNode.insertBefore(g, s);
  })();
});
