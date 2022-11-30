
import React from "react";
 const Speed = (props) => {
    if (props.symbols !== 0 && props.sec !== 0) {
        const wpm = (props.symbols / 5) / (props.sec / 60);
        return (
            <span>
                {Math.round(wpm)} WPM
            </span>
        )
    }
    return null;
}
export default Speed;