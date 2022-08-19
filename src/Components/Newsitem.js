import React, { Component } from 'react'
import './Newsitem.css'

export class Newsitem extends Component {
        
  render() {
   let {title,description,imgurl,newsurl}= this.props;
    return (
      <div className="my-4">
        <div className="card" >
  <img src={!imgurl?"https://images.hindustantimes.com/tech/img/2022/08/15/1600x900/store-woman-holds-after-iphone-beijing-apple_3e37ba9e-3795-11ea-a5b1-19fef2bd3e95_1660549190641_1660549190641.jpg":imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" >{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsurl} target="blank" id='rmamm' className="btn btn-sm btn-dark">Read More..</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
