import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

class Photo extends Component {
  state = {
    desc: "",
    id: "",
    img: "",
    author: "",
  };

  componentDidMount() {
    this.setState({ ...this.props.data });
  }

  handleLink() {}

  render() {
    const { desc, id, img, author } = this.state;
    return (
      <li className="photo__item" key={id} onClick={this.handleLink}>
        <NavLink className="photo__link" to={`/:${id}`}></NavLink>
        <div className="photo__container">
          <div className="img__wrapper">
            <img className="photo__img" src={img} alt={desc} />
          </div>
          <span className="photo__description">(c) {author}</span>
        </div>
      </li>
    );
  }
}

export default Photo;
