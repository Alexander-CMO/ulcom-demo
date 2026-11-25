(function () {
  window.animateCheckEdge = function (section) {
    var edge = document.createElement('span');
    edge.className = 'check-edge';
    edge.setAttribute('aria-hidden', 'true');
    section.appendChild(edge);
    var tween = gsap.fromTo(edge, { scaleY: 1 }, {
      scaleY: 0,
      force3D: true,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'top 35%',
        scrub: true,
        onToggle: function (self) {
          edge.style.willChange = self.isActive ? 'transform' : 'auto';
        }
      }
    });
    return function () {
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
      tween.kill();
      edge.remove();
    };
  };
})();
