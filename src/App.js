import React,{Component} from 'react';


class Subject extends Component{
  render(){
    return(
      <div className="Subject">
        <header>
          <h1>{this.props.title}</h1>  
          {this.props.content}
        </header>        
      </div>
    )
  }
}

class List extends Component{
  render(){
    return(
      <ul>
        <li><a href="1.html">1.html</a></li>
        <li><a href="2.html">2.html</a></li>
        <li><a href="3.html">3.html</a></li>
      </ul>
    );
  }
}


class Content extends Component{
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.content}
      </article>
    )
  }
}

class App extends Component{
  render(){
    return (
      <div className="App">
        <Subject title="WEB" content="World Wide WEB"/>
        <Subject title="WEB2" content="World Wide WEB2"/>
        <List/>
        <Content title="HTML" content="HTML is HyperText Markup Language"/>
        <Content title="HTML2" content="HTML2 is HyperText Markup Language"/>
      </div>
    );
  }
}

export default App;
