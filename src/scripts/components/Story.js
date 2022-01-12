/* ------------------------------------------------------------------------------
@name: Videos
@description: Videos
--------------------------------------------------------------------------------- */

const Videos = (() => {

  // - handleVideos
  const handleVideos = () => {
    $('.js-play-video').on('click', (e) => {
      const _urlVideo = $(e.currentTarget).attr('data-target');
      $('.popup').fadeIn(400, () => {
        $('.popup__frame').attr('src', _urlVideo);
      });
    });
  }
  const handleClosePopup = () => {
    $('.js-popup-close').on('click', () => {
      $('.popup').fadeOut(400, () => {
        $('.popup__frame').attr('src', '');
      });
    });
  }

  // - init
  const init = () => {
    handleVideos();
    handleClosePopup();
  }

  return {
    init
  }

})();

export default Videos
