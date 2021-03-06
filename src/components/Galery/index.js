import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/style.scss';
import "react-alice-carousel/src/alice-carousel.scss";
import AliceCarousel from 'react-alice-carousel';


class Galery extends Component {

    constructor(props)
    {
        super();
        this.state = {
            currentIndex: 0,
            items: [1, 2, 3, 4, 5]
        };

    }

    static PropTypes = {
      images: PropTypes.array.isRequired
    };

    slideTo = (i) => this.setState({currentIndex: i});

    onSlideChanged = (e) => this.setState({currentIndex: e.item});

    slideNext = () => this.setState({currentIndex: this.state.currentIndex + 1});

    slidePrev = () => this.setState({currentIndex: this.state.currentIndex - 1});

    renderThumbs = () =>
        <ul>{this.state.items.map((item, i) =>
            <li key={i} onClick={() => this.slideTo(i)}>Thumb {item}</li>)}
        </ul>;

    renderGallery()
    {
        const {currentIndex, items} = this.state;

        return (<AliceCarousel
            dotsDisabled={true}
            buttonsDisabled={true}
            slideToIndex={currentIndex}
            onSlideChanged={this.onSlideChanged}
        >
            {items.map((item, i) => <div key={i} className="yours-custom-class"><h2>{item}</h2></div>)}
        </AliceCarousel>);
    }

    render()
    {
        return (
            <div>
                <h3>Navigation</h3>
                {this.renderThumbs()}
                <button onClick={() => this.slidePrev()}>Prev button</button>
                <button onClick={() => this.slideNext()}>Next button</button>
                <h3>React Alice Carousel</h3>
                {this.renderGallery()}
            </div>
        );
    }

}

export default Galery