import React from 'react';

class TopicCard extends React.Component {
  render() {
    return (
      <div className='topic-card'>
        <h1 className='topic-header no-margin padding' topic={this.props.topic} onClick={this.props.onClick}>{this.props.topic}</h1>
        <p className='no-margin padding' detail={this.props.detail}>{this.props.detail}</p>
      </div>
    );
  }
}

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
  }

  render() {
    return (
      <div className='container'>
        {
          this.props.topics.map(element => {
            return <TopicCard key={element.id} topic={element.topic} detail={element.detail} onClick={this.handleClick} clicked={this.state.clicked} />;
          })
        }
      </div>
    );
  }
}
