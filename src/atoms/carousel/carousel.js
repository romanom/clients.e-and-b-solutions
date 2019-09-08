import React from "react";
import PropTypes from "prop-types";
import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";

import "./pure-react-carousel.scss";
import "./carousel.scss";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: true
    };
  }

  handleButtonClick = () => this.setState({ isPlaying: false });

  render() {
    const { isPlaying } = this.state;
    const { images } = this.props;
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={images.length}
        isPlaying={isPlaying}
        interval={4000}
        className="carousel"
      >
        <Slider>
          {images.map(({ alt, key, src }) => (
            <Slide key={key} index={key} className="carousel__slide">
              <Image
                key={key}
                className="carousel__slide-image"
                src={src}
                alt={alt}
              />
            </Slide>
          ))}
        </Slider>
        <div className="carousel__buttons">
          <ButtonBack
            className="carousel__button"
            onClick={this.handleButtonClick}
          >
            Back
          </ButtonBack>
          <ButtonNext
            className="carousel__button"
            onClick={this.handleButtonClick}
          >
            Next
          </ButtonNext>
        </div>
      </CarouselProvider>
    );
  }
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired
};

export default Carousel;
