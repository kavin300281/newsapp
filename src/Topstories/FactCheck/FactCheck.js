import React from 'react';
import './FactCheck.css';

class FactCheck extends React.Component {
    constructor(props) {
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
        var newsPromise=fetch('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=9738887d355c42a3b8a1f2cd5392cf3b');
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
        var numbers = [1,2,3,4,5];

        return (
            <div className="fact-container">
                <h4>Tech News</h4>
                {
                    this.state.isDataLoading ? (<div >News is loading</div>):
                    this.state.news.map((data, index) => {
                        return (
                            <a href={data['url']} target="blank" key={index} className="fact-link">
                                <div className="fact-title">{data["title"]}</div>
                                <div className="fact-source">{data['source']['name']}</div>
                            </a>
                        );
                    })
                }
            </div>
        );
    }
}

export default FactCheck;