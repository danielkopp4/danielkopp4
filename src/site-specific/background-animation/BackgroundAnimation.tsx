import React from 'react';
import { Circle } from './Circle';
import "./BackgroundAnimation.scss";
import "./TransitionTimeDef.css";

const circles: number = 5;

const BackgroundAnimation = () => {

    const circleComponents: Array<React.ReactNode> = [];

    for (var i = 0; i < circles; i++) {
        circleComponents.push((<Circle name={String(i)} key={i} />));
    }


    return (
        <div className="animation">
            <div>
                {circleComponents}
            </div>
        </div>
    );
}

export { BackgroundAnimation };