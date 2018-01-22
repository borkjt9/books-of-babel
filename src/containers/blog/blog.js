import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts, fetchCategories} from '../../actions';
import _ from 'lodash';
import './blog.scss';
import { Scrollbars } from 'react-custom-scrollbars';
import CustomScroll from 'react-custom-scroll';

import Header from '../../components/shared/header/header';
class Blog extends Component {

  displayedPosts = [];
  postFilter = 'All'

  constructor(props) {
    super(props);
    this.state = {
      activeCategory: "all"
    }
    this.renderPosts = this.renderPosts.bind(this);

  }
  componentDidMount() {
    this.props.fetchPosts( () => {
    });
    this.props.fetchCategories();
  }

  renderLinks() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item post-link " key={post.id}>
          <a href={"#" + post.slug}>
            {post.title.rendered}
          </a>
        </li>
      )
    });
  }

chooseCategory(category) {
  console.log(category)
  this.setState({
  activeCategory: category
  })
}

renderCategories() {
  return _.map(this.props.categories, category => {
    return (
      <li className="list-group-item post-link " key={category.id}>
        <a onClick={() => this.chooseCategory(category.id)}>
          {category.name}
        </a>
      </li>
    )
  });
}



filterPosts(category) {
  console.log(category)
  if (category === 'all') {
    return this.props.posts
  } else {
    return this.props.posts.filter(function (post) {
      console.log(post.categories.includes(category))
      return post.categories.includes(category);
    });

  }
}

renderPosts() {
  if (this.props.posts.length > 0) {
    const filteredPosts = this.filterPosts(this.state.activeCategory);
    return _.map(filteredPosts, post => {
      return (
        <li className="list-group-item" id ={post.slug} key={post.id}>
          <h4 >
            {post.title.rendered}
          </h4>
          <div dangerouslySetInnerHTML={ {__html: post.content.rendered}} />
        </li>
      )
    });
  } else {
  }
}

  render() {
    return (
      <div className="blog">
        <Header></Header>
        <div className="container-wrapper">
          <span className="vert-top posts-table col-3">
            <h4 className="posts-title">Previous Posts</h4>
            {this.renderLinks()}
            <h4 className="posts-title">Categories</h4>
            {this.renderCategories()}

          </span>
          <span className="col-9">
            <div className="data-table">
              <ul className="list-group">
                <div>
                  {this.renderPosts()}
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
  return (
    {
    posts: state.posts,
    categories: state.categories,
    activeCategory: "All"
    }
  );
}
export default connect(mapStateToProps, {fetchPosts, fetchCategories})(Blog);
