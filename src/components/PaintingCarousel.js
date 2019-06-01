import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Swiper from 'react-id-swiper';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm';
import PaintingSlide from './PaintingSlide';
import abstractOne from '../images/abstract_1_cropped-small.jpg';
import abstractTwo from '../images/abstract_2_cropped-small.JPG';
import abstractFour from '../images/abstract_4_cropped-small.JPG';
import abstractFive from '../images/abstract_5_cropped-small.JPG';
import abstractEight from '../images/abstract_8_cropped-small.JPG';
import nightSwim from '../images/night_swim-small.JPG';

class PaintingCarousel extends Component {
    render() {
        const paintingList = [
            {
                source: nightSwim,
                alt: 'night swim painting'
            },
            {
                source: abstractOne,
                alt: 'abstract one painting'
            },
            {
                source: abstractTwo,
                alt: 'abstract two painting'
            },
            {
                source: abstractFour,
                alt: 'abstract four painting'
            },
            {
                source: abstractFive,
                alt: 'abstract five painting'
            },
            {
                source: abstractEight,
                alt: 'abstract eight painting'
            },
        ]

        const paintingRender = paintingList.map((painting) => {
            return (
                <div>
                    <PaintingSlide key={painting.alt} src={painting.source} alt={painting.alt} />
                </div>
            )
        })
        const params = {
            modules: [Navigation],
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              },
              renderPrevButton: () => <button className="swiper-button-prev"><i className="material-icons">
              arrow_back_ios
              </i></button>,
              renderNextButton: () => <button className="swiper-button-next"><i className="material-icons">
              arrow_forward_ios
              </i></button>
          }
        return (
            <Swiper {...params}>
                {paintingRender}
            </Swiper>
        )
    }
}

export default PaintingCarousel;