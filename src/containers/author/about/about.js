import React, { Component } from 'react';
import './about.scss'

class About extends Component {
  bio = "Josiah Bancroft's fantasy-adventure series is published by Orbit Books (US/UK). Before settling down to write fantasy novels, Josiah was a poet, college instructor, and aspiring comic book artist. When he is not writing, he enjoys playing post-pop music with his band, Dirt Dirt, drawing chalk pictures on his office wall, and cooking pub curry for his wife, Sharon. He shares a home with her and their two rabbits, Mabel and Chaplin, in Philadelphia."

  render() {
    return (
      <div className="about" >
        <span className="col-6">
          <div className="center margin-40">
            <img className="headshot" src= {require(`../../../assets/img/josh_headshot.png`)}/>
            <div className="headshot-description center margin-10">
              <h5>
                Photograph taken by Kim Bricker, 2017.
                <br />
                kimbrickerstudio@gmail.com
              </h5>
            </div>
          </div>
        </span>
        <span className="col-6 margin-top-10pct vert-top">
          <div className="bio-style margin-right-40">
            {this.bio}
          </div>
        </span>
      </div>
    )
  }
}
export default About;
