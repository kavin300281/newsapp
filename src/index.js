import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header/Header';
import reportWebVitals from './reportWebVitals';
import NavigationBar from './NavigationBar/NavigationBar';
import Topstories from './Topstories/Topstories';
import {BrowserRouter,Route,Redirect} from 'react-router-dom';
import Indianews from './Indianews/Indianews';
import BusinessNews from './BusinessNews/BusinessNews';
import Entertainment from './Entertainment/Entertainment';
import Sports from './Sports/Sports';
import TopicBasedNews from './TopicBasedNews/TopicBasedNews';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Header />
    <div className='news-container'>
    <NavigationBar/>
    <Route path="/topstories" component={Topstories} />
    <div className='newcontainer'>
      {/* <Route path="/india" component={Indianews} />
      <Route path="/business" component={BusinessNews } />
      <Route path="/entertainment" component={Entertainment } />
      <Route path="/sports" component={Sports } /> */}
      <Route path="/topics/:name" component={TopicBasedNews}/>
      <Route path="*">
        <Redirect to={"/topstories"} />

      </Route>

    </div>
    
      {/* <NavigationBar/> */}
       {/* <Route path='/topstories'> <Topstories/>  </Route> */}
      {/* <Route path="/topstories" component={Topstories } />
       <Route path="/india" component={Indianews } />
      <Route path="/business" component={BusinessNews } />
      <Route path="/entertainment" component={Entertainment } />
      <Route path="/sports" component={Sports } /> */}
      {/* <Topstories/>  */}
      
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
