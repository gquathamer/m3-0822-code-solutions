import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as lightCircle } from '@fortawesome/free-regular-svg-icons';

class Arrow extends React.Component {
  render() {
    let arrow;
    let carouselDirection;
    if (this.props.direction === 'right') {
      arrow = faArrowRight;
      carouselDirection = this.props.moveRight;
    } else {
      arrow = faArrowLeft;
      carouselDirection = this.props.moveLeft;
    }
    return (
      <div className='arrow container'>
        <FontAwesomeIcon onClick={carouselDirection} icon={arrow} size='2xl' />
      </div>
    );
  }
}

class Dots extends React.Component {
  render() {
    return (
      <div className='dots container' >
        {
          this.props.numberOfImages.map((element, i) => {
            let icon;
            i === this.props.currentImageIndex ? icon = faCircle : icon = lightCircle;
            return <FontAwesomeIcon className='circle' icon={icon} key={element.id} />;
          })
        }
      </div>
    );
  }
}

class Image extends React.Component {
  render() {
    return (
      <div className="image-container">
        <img id={this.props.id} src={this.props.source} alt="pokemon" />
      </div>
    );
  }
}

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0
    };
    this.moveCarouselRight = this.moveCarouselRight.bind(this);
    this.moveCarouselLeft = this.moveCarouselLeft.bind(this);
    this.startCarousel = this.startCarousel.bind(this);
    this.stopCarousel = this.stopCarousel.bind(this);

  }

  componentDidMount() {
    this.startCarousel();
  }

  componentWillUnmount() {
    this.stopCarousel();
  }

  stopCarousel() {
    clearInterval(this.timerID);
  }

  startCarousel() {
    this.timerID = setInterval(() => {
      this.moveCarouselRight();
    }, 3000);
  }

  moveCarouselRight() {
    this.stopCarousel();
    this.setState(previousState => {
      let newImageIndex;
      if (previousState.currentImageIndex + 1 < this.props.imageURL.length) {
        newImageIndex = previousState.currentImageIndex + 1;
      } else {
        newImageIndex = 0;
      }
      return {
        currentImageIndex: newImageIndex
      };
    }, this.startCarousel());
  }

  moveCarouselLeft() {
    this.stopCarousel();
    this.setState(previousState => {
      let newImageIndex;
      if (previousState.currentImageIndex - 1 < 0) {
        newImageIndex = this.props.imageURL.length - 1;
      } else {
        newImageIndex = previousState.currentImageIndex - 1;
      }
      return {
        currentImageIndex: newImageIndex
      };
    }, this.startCarousel());
  }

  render() {
    return (
      <div className='carousel'>
        <Arrow direction='left' moveLeft={this.moveCarouselLeft} />
        <Image id={this.props.imageURL[this.state.currentImageIndex].id} source={this.props.imageURL[this.state.currentImageIndex].url} />
        <Arrow direction='right' moveRight={this.moveCarouselRight} />
        <Dots numberOfImages={this.props.imageURL} currentImageIndex={this.state.currentImageIndex} />
      </div>
    );
  }
}
