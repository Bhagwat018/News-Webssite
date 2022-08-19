import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProp = {
 
 country: "in",
 category: "general"


    
  }
  static propTypes = {
    country : PropTypes.string,
    category: PropTypes.string
   
       
     }
     


constructor(){
    super();
    // console.log("Hello I am a constructor from News component");
    this.state = {
     articles:[],
    loading: false,
        page:1
    }
}
 async componentDidMount(){

let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=7a80edc634a44f72975f5dffd5ddfc4d`
let data = await fetch(url);
let pasedata = await data.json()
this.setState({articles:pasedata.articles})


}
//  handalpreviousclick= async()=>{
  
//   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}category=${this.props.category$apiKey}=7a80edc634a44f72975f5dffd5ddfc4d&pages=${this.state.page -1}`
//   let data = await fetch(url);
//   let pasedata = await data.json()

// this.setState({
// page: this.state.page-1,
// articles:pasedata.articles
//  })


// }
//  handalnextclick= async()=>{

//   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}category=${this.props.category$apiKey}=7a80edc634a44f72975f5dffd5ddfc4d&pages=${this.state.page +1}`
//   let data = await fetch(url);
//   let pasedata = await data.json()
 
// this.setState({
// page: this.state.page+1,
// articles:pasedata.articles
//  })


// }
 render() {
    return (
      <div>
          

<div className="container my-4">
  
  <h2>News- Top Headlines</h2>
 
           <div className="row">
      {this.state.articles.map((element)=>{
        return (
        <div className="col-md-4" key={element.url}>
        <Newsitem  title={element.title?element.title.slice(0,45):""} description= {element.description?element.description.slice(0,88):""}
         imgurl={element.urlToImage}
          newsurl={element.url} />
    </div>
        )


      })}      
     
    
          
     
           </div >
       <div className=' container  d-flex justify-content-between'>
           <button disabled={this.state.page<=1} type="button" onClick={this.handalpreviousclick} className="btn btn-dark"> &larr;Previous</button>
           {/* <button  di type="button" onClick={this.handalnextclick} className="btn btn-dark">Next  &rarr;</button> */}
 </div>
       
       
       
       
        </div>
      </div>
    )
  }
}

export default News
