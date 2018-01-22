import React, { Component } from 'react';
import './art.scss';
import { connect } from 'react-redux';
import Header from '../../components/shared/header/header';
import {fetchMedia} from '../../actions';
import _ from 'lodash';


class Art extends Component {
  uniqueCategories = []
  constructor(props){
    super(props);
    this.state = {
      activeArt: "all"
    }
    this.renderArt = this.renderArt.bind(this);

  }

  componentDidMount() {
    this.props.fetchMedia().then(() => {
      this.uniqueCategories = this.getUniqueCategories(this.props.art);
      console.log('unique categories 1', this.uniqueCategories)
      this.setState({
        activeArt: "all"
      })
    })
  }

  getUniqueCategories(arr) {

    var u = {}, a = ['all'];
    for(var i = 0, l = arr.length; i < l; ++i) {
      const categories = arr[i].alt_text.split('|');
      console.log('categories', categories)
      for (var j = 0, k = categories.length; j < k; ++j) {
        const category = categories[j]
        console.log('category', category)

        if (!u.hasOwnProperty(category) && category != '') {
            a.push(category);
            u[category] = 1;
        }
      }


    }
    return a;
  }

  chooseCategory(category) {

    this.setState({
      activeArt: category
    })
  }

  renderCategories() {
    console.log('unique categories 2', this.uniqueCategories )
    return(
      <div>
        {
          this.uniqueCategories.map((category, index) => (
          <li className="list-group-item post-link" key={category}>
            <a onClick={() => this.chooseCategory(category)}>
              {category}
            </a>
          </li>
          ))
      }
      </div>
    )
    // for (var i = 0; i < this.uniqueCategories.length; i++) {
    //   const category = this.uniqueCategories[i]
    //   return (
    //     <li className="list-group-item" key={category}>
    //       <a onClick={() => this.chooseCategory(category)}>
    //         {category}
    //       </a>
    //     </li>
    //   )
    // }
  }

  filterArt(category) {
    console.log('filter art', category)
    if (category === 'all') {
      return this.props.art
    } else {
      return this.props.art.filter(function (media) {
        return media.alt_text.includes(category);
      });

    }
  }


  renderArt() {
    if (this.props.art.length > 0) {
    const filteredArt = this.filterArt(this.state.activeArt);
    return _.map(filteredArt, media => {
      console.log('media', media)
      return (
        <li className="list-group-item" id ={media.slug} key={media.id}>
          <h4 >
            {media.title.rendered}
          </h4>
          <img className="art-image" src={media.source_url} />
          <div dangerouslySetInnerHTML={ {__html: media.caption.rendered}} />
        </li>
      )
    });
  } else {
  }

  }
  render() {
    return (
      <div className="art">
        <Header></Header>
        <div className="container-wrapper">
          <span className="posts-table col-3">
            <h4 className="posts-title">Categories</h4>
            {this.renderCategories()}

          </span>
          <span className="col-9">
            <div className="data-table">
              <ul className="list-group img-group">
                <div>
                  {this.renderArt()}
                </div>
              </ul>
            </div>
          </span>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state', state)
  return (
    {
    art: state.art,
    categories: state.artCategories,
    activeArt: "all"
    }
  );
}

export default connect(mapStateToProps, {fetchMedia})(Art);;
