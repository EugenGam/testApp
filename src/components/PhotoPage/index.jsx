import { Component } from "react";
import { connect } from "react-redux";
import { getPhoto } from "../../Redux/photoPageReducer";
import "./style.scss";

class Photo extends Component {
  state = {
    photo: {
      desc: "",
      img: "",
      author: "",
      likes: "",
      downloads: "",
      views: "",
    },
    loading: false,
  };

  componentDidMount() {
    this.props.getPhoto(window.location.pathname.slice(2));
  }

  componentDidUpdate() {
    const { desc, img, author, likes, downloads, views } = this.props.photo;
    if (this.state.photo.img !== img) {
      this.setState({ photo: { desc, img, author, likes, downloads, views } });
    }
    if (this.state.loading !== this.props.isLoading) {
      this.setState({ loading: this.props.isLoading });
    }
  }

  render() {
    const { desc, img, author, likes, downloads, views } = this.state.photo;
    return this.state.loading ? (
      <div>loading...</div>
    ) : (
      <div className="photopage__container">
        <img className="photopage__img" src={img} alt={desc} />
        <ul className="photopage__list">
          <li className="photopage__item author">{author}</li>
          <li className="photopage__item likes">{likes}</li>
          <li className="photopage__item downloads">{downloads}</li>
          <li className="photopage__item views">{views}</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  photo: state.photo,
  isLoading: state.isLoading,
});

const mapDispatchToProps = {
  getPhoto: getPhoto,
};

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
