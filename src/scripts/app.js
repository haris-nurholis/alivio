// --- utilities
import {
  Scrolllable,
  BrowserCheck
} from 'utilities';

// --- components
import {
  // Example
  Header,
  Footer,
  Banner,
  Story,
  WindowAnimate,
  WindowScroll,
  WindowResize
} from 'components';

// --- App
const App = (() => {
  // --- run transition
  const runTransition = () => {
    $('body').removeClass('hold-transition');
  }

  // --- show site content
  const showSiteContent = () => {
    $('.js-main-site').removeClass('main-site--hide');
    // --- disable scroll
    Scrolllable.enable();
  }

  // --- ready
  const ready = () => {
    (($) => {
      // --- disable scroll
      Scrolllable.disable();

      // --- Global
      runTransition();
      showSiteContent();
      BrowserCheck.init();

      // --- Project
      // Example.init();
      Header.init();
      Footer.init();
      Banner.init();
      Story.init();
      WindowAnimate.init();
      WindowScroll.init();
      WindowResize.init();

    })(jQuery);
  }

  // --- load
  const load = () => {
    (($) => {
      $(window).on("load", () => {

      });
    })(jQuery);
  }

  // --- init
  const init = () => {
    load();
    ready();
  }

  // --- return
  return {
    init
  }

})();

// ---  run main js
App.init();
