import React from "react";
import classnames from "classnames";
import "./Card.css";

const Card = ({id, title, img, isActive, callBack}) => {
    const handleClick = () => {
        if (!isActive) {
            callBack(id);
        }
    }
    return (
        <div
            className={classnames("slide", {"active": isActive}, `car-${img}`)}
            onClick={handleClick}
        >
            <h3>{title}</h3>
        </div>
    )
};

export default Card;