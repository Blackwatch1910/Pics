import React from 'react';

class ImageCard extends React.Component {
    constructor (props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();  //creating reference
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans); //everytime the <img /> loads up it displays this event
        //this.setState({ spans });
    };

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({ spans })
    }

    render() {

        const { description, urls } = this.props.image;
        return (
            <div style = {{ gridRowEnd: `span ${this.state.spans}` }}>
                <img alt = { description }
                     ref = {this.imageRef }
                     src = { urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;