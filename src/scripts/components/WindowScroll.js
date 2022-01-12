/*----------------------------------------
@name : Components | Window Scroll
@description: set scroll header
----------------------------------------
*/

const WindowScroll = (() => {

  // - handleWindowScroll
  const handleWindowScroll = () => {
    $(window).scroll(() => {
      handleCheckScroll();
    });
  }

  const handleCheckScroll = () => {
      const _scrollTop = $(window).scrollTop();
      if (_scrollTop >= 32) {
        $('body').addClass('on-scroll');
      } else {
        $('body').removeClass('on-scroll');
      }
    }

  // -init
  const init = () => {
    handleWindowScroll();
    handleCheckScroll();
  }

  return {
    init,
    checkScroll: handleCheckScroll
  }

})();

export default WindowScroll;
