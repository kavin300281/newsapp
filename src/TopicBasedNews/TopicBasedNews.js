import React from "react";
import NewCard from "../NewCard/NewCard";

class TopicBasedNews extends React.Component{
    constructor(props){
        super(props);
        this.state={
            topic:"",
            news:[],
            isDataLoading:false
        }

    }
    componentDidMount(){
        this.setState({
        isDataLoading:true}
        );
        this.fetchTopicNews();
        
    }
    componentDidUpdate(prevProps){
        if(this.state.topic!=prevProps.match.params['name']){
           this.fetchTopicNews();

        }

    }
    fetchTopicNews()
    {
        var topicname = this.props.match.params
        var newsPromise=fetch('https://newsapi.org/v2/top-headlines?country=in&category='+topicname['name'] +'&apiKey=9738887d355c42a3b8a1f2cd5392cf3b');
        newsPromise.then(response=>{
            var body=response.json();
            body.then(data=>{
                this.setState({news:data['articles'],isDataLoading:false})
                });
            });
    }
    static getDerivedStateFromProps(props,state){
        var topicname = props.match.params
        return {topic:topicname['name']}

        

    }
    render(){
        // var topicname = this.props.match.params
        console.log(this.state.news)
        return(
        <div style={{paddingTop:"40px", float:"left",width:"65%"}}>
           {    
                    this.state.isDataLoading ? <div> News is loading...</div>:
                    
                    this.state.news.map((item)=>{
                        return <NewCard key={item['url']} data={item}/>
                    })
                    
            } 
            </div>
        );
    }
}
export default TopicBasedNews;