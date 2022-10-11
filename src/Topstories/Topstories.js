import React from "react";
import NewCard from "../NewCard/NewCard";
import './Topstories.css';
import news from "../news";
import FactCheck from "./FactCheck/FactCheck";
class Topstories extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            news:[],
            isDataLoading:false
        };

    }
    componentDidMount(){
        this.setState({
            isDataLoading:true
        });
        var newsPromise=fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=9738887d355c42a3b8a1f2cd5392cf3b');
        newsPromise.then(response=>{
            var body=response.json();
            body.then(data=>{
                this.setState({
                  news:data["articles"],
                  isDataLoading:false
                });
            });

        });
        // console.log(news);
    }
    render(){
        return(
            <div className="top-stories-container">
                
            <div className="stories" style={{marginTop:"40px"}} >
                <h3>Headlines</h3>
                { 
                    this.state.isDataLoading ? (<div >News is loading</div>):
                    this.state.news.map((item)=>{
                        return <NewCard key={item['url']} data={item}/>
                    })
                }
                
            </div>
            <div className="sidebar"><FactCheck /></div>
            </div>
        )
    }



}
export default Topstories