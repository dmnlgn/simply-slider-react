import React, { useRef, useState } from 'react';
import './Slider.css';

import img1 from '../img/stranger-things_1.jpg';
import img2 from '../img/stranger-things_2.jpg';
import img3 from '../img/stranger-things_3.jpg';
import img4 from '../img/stranger-things_4.jpg';
import img5 from '../img/stranger-things_5.jpg';
import img6 from '../img/stranger-things_6.jpg';

function Slider() {
    const item = useRef({})

    const slider = [
        {
            title: 'Lorem Ipsum is simply dummy text',
            subtitle: 'It is a long established fact that a reader will be distracted',
            img: img1,
            alt: 'picture'
        },
        {
            title: 'Lorem Ipsum is simply dummy text',
            subtitle: 'It is a long established fact that a reader will be distracted',
            img: img2,
            alt: 'picture'
        },
        {
            title: 'Lorem Ipsum is simply dummy text',
            subtitle: 'It is a long established fact that a reader will be distracted',
            img: img3,
            alt: 'picture'
        },
        {
            title: 'Lorem Ipsum is simply dummy text',
            subtitle: 'It is a long established fact that a reader will be distracted',
            img: img4,
            alt: 'picture'
        },
        {
            title: 'Lorem Ipsum is simply dummy text',
            subtitle: 'It is a long established fact that a reader will be distracted',
            img: img5,
            alt: 'picture'
        },
        {
            title: 'Lorem Ipsum is simply dummy text',
            subtitle: 'It is a long established fact that a reader will be distracted',
            img: img6,
            alt: 'picture'
        },

    ]

    const [i] = useState(0);
    const lastIndex = slider.length;
    let index = i;

    const scrollToId = () => {
        item.current[index].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        })
    }

    // left nav
    let PrevButton = () => {
        if(index === 0){
            index = lastIndex-1
        }else{
            index -= 1
        }
        scrollToId();
    }

    // right nav
    let NextButton = () => {
        if(index === lastIndex-1){
            index = 0;
        }else{
            index += 1;
        }
        scrollToId();
    }

    const postSlider = slider.map((post, i) => (
            <div className="slider"
                 ref={ref => item.current[i] = ref}
                 key={i}>
                <img
                    alt={post.alt}
                    src={post.img}
                />
                <div>
                    <header>{post.title}</header>
                    <p>{post.subtitle}</p>
                </div>
            </div>
        )
    )

    const buttons = (
        <div>
            <button
                onClick={PrevButton}
                className={"button left"}
            >LEFT</button>
            <button
                onClick={NextButton}
                className={"button right"}
            >RIGHT</button>
        </div>
    )

    return (
        <>
            <div id="Slider">
                {postSlider}
                {buttons}
            </div>
        </>
    );
}

export default Slider;