import { Component } from "react";
import { connect } from "react-redux";
import Photo from "../Photo";
import { getPhotos } from "../../Redux/galleryReducer";
import "./style.scss";

class Gallery extends Component {
  state = {
    photos: [],
    loading: false,
  };

  componentDidMount() {
    this.props.getPhotos();
  }

  componentDidUpdate() {
    if (this.state.photos.length === 0) {
      this.setState({ photos: [...this.props.gallery] });
    }
  }

  showPhotos() {
    console.log(this.state);
    let list = this.state.photos.map((item) => {
      return <Photo data={item} key={item.id} />;
    });
    return [...list];
  }
  render() {
    return this.state.loading ? (
      <div>loading...</div>
    ) : (
      <div className="gallery__container">
        <ul className="gallery__list">{this.showPhotos()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gallery: state.gallery,
});

const mapDispatchToProps = {
  getPhotos: getPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
