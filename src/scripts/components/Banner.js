/* ------------------------------------------------------------------------------
@name: Banner
@description: Banner
--------------------------------------------------------------------------------- */

const Banner = (() => {

  // - handleBanner
  const handleBanner = () => {
    const _selector = $('.js-banner-carousel');
    const _itemLength = $('.js-banner-carousel .hero-banner__item').length;
    let _itemRun = 1;

    if (_itemLength > _itemRun) {
      _selector.addClass('owl-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        loop: false,
        autoHeight: true,
        autoplaySpeed: 750,
        autoplayHoverpause: true,
        rewind: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
      });
    } else {
      _selector.removeClass('owl-carousel').addClass('.hero-banner--single-show');
    }
  }

  // - init
  const init = () => {
    handleBanner();
  }

  return {
    init
  }

})();

export default Banner
