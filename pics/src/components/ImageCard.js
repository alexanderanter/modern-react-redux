import React from "react";
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    //step 1declare and create the REF
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    //add a load callback to call setSpans function when the element we reach via REF is loaded
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  //make sure its an arrow function to avoid issues with this
  setSpans = () => {
    //check the value of our referenced element
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    //update the state and rerender
    this.setState({ spans });
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        {/* create ref attribute that points to the declared ref in the constructor */}
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
