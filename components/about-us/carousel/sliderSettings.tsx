export const desktopSliderSettings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  initialSlide: 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export const mobileSliderSettings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
}

export const tabletSliderSettings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 500,
}
