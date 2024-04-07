import React from "react";
import Article from "./Article";
import Aside from "./Aside";

class Main extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <Article />
                <Aside />
            </>
        )
    }
}

export default Main;