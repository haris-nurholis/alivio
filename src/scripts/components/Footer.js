/*----------------------------------------
@name : components | Footer
@description: set margin bottom footer, set accordion footer
----------------------------------------
*/

const Footer = (() => {

  // - handleBodyPaddingBottom
  const handleBodyPaddingBottom = () => {
    if ($(window).width() > 320) {
      const _footerHeight = $('.footer').innerHeight();
      $('.main-site').css('padding-bottom', _footerHeight + 'px');
    } else {
      $('.main-site').removeAttr('style');
    }
  }


  - handleFooterMenu
  const handleFooterMenu = () => {
    $('.js-footer-menu .footer__nav__link').on('click', (e) => {
      const _target = $(e.currentTarget).attr('href');
      $('.js-header-menu .header__nav__link[href="'+_target+'"]').trigger('click');
      e.preventDefault();
    });
  }

  - handleClickLogoFooter
  const handleClickLogoFooter = () => {
    $('.js-footer-logo').on('click', (e) => {
      // untuk mengklik (tigger)
      $('.js-header-menu .header__nav__link[href="#whyAlivio"]').trigger('click');
      e.preventDefault();
    });
  }

  // - init
  const init = () => {
    handleBodyPaddingBottom();
    handleFooterMenu();
    handleClickLogoFooter();
  }

  return {
    init,
    setBodyPaddingBottom: handleBodyPaddingBottom,
  }

})();

export default Footer;
