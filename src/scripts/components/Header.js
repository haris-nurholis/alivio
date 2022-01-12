/*----------------------------------------
@name : header - components
@description: function mobile menu
----------------------------------------
*/

const Header = (() => {

  // - handleMobileMenu
  const handleMobileMenu = () => {
    $('.js-burger-menu').on('click', (e) => {
      $('body').toggleClass('show-navigation rm-scroll').addClass('header--single-show');
    });
  }

  // - handleCheckClass
  const handleCheckClass = () => {
    if($(window).width() > 991.98 ) {
      $('body').removeClass('show-navigation rm-scroll');
    }
  }

  const handleMainMenu = () => {
    $('.js-header-menu .header__nav__link').on('click', (e) => {
      const _target = $(e.currentTarget).attr('href');
      const _active = $(e.currentTarget).parents('.header__nav__item');
      let _targetPosition = 0;
      $('.header__nav__item').removeClass('header__nav__item--active');
      _active.addClass('header__nav__item--active');
      if(_target !== '#about') {
        // mendapatkan posisi dari atas
        _targetPosition = $(_target).offset().top;
        if(!$('body').hasClass('scroll-down')){
          _targetPosition -= $('.header').outerHeight();
        }
      }
      $('html, body').animate({
        scrollTop: _targetPosition
      }, 500);
      if($(window).width() < 992) {
        $('body').removeClass('show-navigation rm-scroll');
      }
      e.preventDefault();
    });
  }

  const init = () => {
    handleMobileMenu();
    handleCheckClass();
    handleMainMenu();
  }

  return {
    init,
    checkClass: handleCheckClass
  }

})();

export default Header;
