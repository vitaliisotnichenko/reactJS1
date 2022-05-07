import React from "react";

const withClass = (Component, classNamme) => {
    return (props) => {
        return (
            <div className={classNamme}>
                <Component {...props} />
            </div>
        )
    }
}

export default withClass