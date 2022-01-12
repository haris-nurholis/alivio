    /*----------------------------------------
@name : Components | handleAnimate
@description: carousel handleAnimate
----------------------------------------
*/

const handleAnimate = (() => {

  // - handleHowIt
  const handleHowIt = () => {
    ScrollReveal().reveal('.how-it__head', {
      distance: '32px',
      duration: 1000,
      origin: 'bottom',
      viewOffset: {
        left: 64
      }
    });

    ScrollReveal().reveal('.how-it__title', {
      distance: '32px',
      duration: 1000,
      origin: 'bottom',
      viewOffset: {
        left: 64
      }
    });

    ScrollReveal().reveal('.how-it__desc', {
      distance: '32px',
      duration: 1000,
      delay: 200,
      origin: 'bottom',
      viewOffset: {
        rigth: 70
      }
    });
  }

   // - handleAlivio
  const handleAlivio = () => {
    ScrollReveal().reveal('.alivio__item:nth-child(1)', {
      distance: '32px',
      duration: 1000,
      delay: 200,
      origin: 'bottom',
      viewOffset: {
        bottom: 70
      }
    });

    ScrollReveal().reveal('.alivio__item:nth-child(2)', {
      distance: '32px',
      duration: 1000,
      delay: 400,
      origin: 'bottom',
      viewOffset: {
        bottom: 80
      }
    });

    ScrollReveal().reveal('.alivio__item:nth-child(3)', {
      distance: '32px',
      duration: 1000,
      delay: 600,
      origin: 'bottom',
      viewOffset: {
        bottom: 80
      }
    });
  }

  // - handleOurProduct
  const handleOurProduct = () => {
    ScrollReveal().reveal('.our-product__big-el', {
      distance: '32px',
      duration: 1000,
      origin: 'bottom',
      viewOffset: {
        bottom: 64
      }
    });

    ScrollReveal().reveal('.our-product__small', {
      distance: '32px',
      duration: 1000,
      origin: 'left',
      viewOffset: {
        left: 70
      }
    });

    ScrollReveal().reveal('.our-product__subtitle', {
      distance: '32px',
      duration: 1000,
      delay: 200,
      origin: 'bottom',
      viewOffset: {
        bottom: 70
      }
    });

    ScrollReveal().reveal('.our-product__title', {
      distance: '32px',
      duration: 1000,
      delay: 200,
      origin: 'bottom',
      viewOffset: {
        bottom: 70
      }
    });

    ScrollReveal().reveal('.our-product__desc', {
      distance: '32px',
      duration: 1000,
      delay: 200,
      origin: 'bottom',
      viewOffset: {
        bottom: 70
      }
    });

    ScrollReveal().reveal('.our-product__btn', {
      distance: '32px',
      duration: 1000,
      delay: 200,
      origin: 'bottom',
      viewOffset: {
        bottom: 70
      }
    });
  }

   // - handleStory
  const handleStory = () => {
      ScrollReveal().reveal('.story__img__el', {
      distance: '32px',
      duration: 1000,
      delay: 200,
      origin: 'rigth',
      viewOffset: {
        rigth: 64
      }
    });

       ScrollReveal().reveal('.story__img__icons', {
      distance: '32px',
      duration: 1000,
      delay: 200,
      origin: 'rigth',
      viewOffset: {
        rigth: 64
      }
    });

    ScrollReveal().reveal('.story__title', {
      distance: '32px',
      duration: 1000,
      delay: 100,
      origin: 'bottom',
      viewOffset: {
        bottom: 64
      }
    });

     ScrollReveal().reveal('.story__desc', {
      distance: '32px',
      duration: 1000,
      delay: 200,
      origin: 'bottom',
      viewOffset: {
        bottom: 64
      }
    });

      ScrollReveal().reveal('.story__btn', {
      distance: '32px',
      duration: 1000,
      delay: 200,
      origin: 'bottom',
      viewOffset: {
        bottom: 64
      }
    });
  }

  // - init
  const init = () => {
    handleHowIt();
    handleAlivio();
    handleOurProduct();
    handleStory();
  }

  return {
    init
  }
})();

export default handleAnimate;
