import React from "react";
import './NewCard.css';
import news from "../news";
class NewCard extends React.Component{
    constructor(props){
        super(props);

    }
    componentDidMount(){
        console.log(this.props)
    }
    render()
    {
        var data = this.props.data;
        return (
            <div className="card-container">
                <div className="img" style={{backgroundImage:"url("+ data["urlToImage"]+")"}}></div>
                {/* <div className="half-portion" >
                    <a href='#' className="link-content"><h3>Life goes on and on</h3></a>
                    <a href='#' className="side-link">Times of India</a>
                </div>
                 */}
                 <div className="link-section">
                    <a href={data['url']} target="blank" className="link_decoration"><h3>{data['title']}</h3></a>
                    <a href='#' className="side-link">{data['source']['name']} <span className="side-link">{data['publishedAt']}</span>
                    </a>
                    
                 </div>

            </div>

        )
    }
}
export default NewCard;