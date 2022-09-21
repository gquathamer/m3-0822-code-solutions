import React from 'react';

class TopicCard extends React.Component {
  render() {
    let visibility;
    this.props.clickedTopicID === this.props.id && this.props.clickCount < 1 ? visibility = 'show' : visibility = 'hide';
    return (
      <div className='topic-card'>
        <h1 className='topic-header no-margin padding' id={this.props.id} onClick={this.props.onClick}>{this.props.topic}</h1>
        <p className={`no-margin padding ${visibility}`}>{this.props.detail}</p>
      </div>
    );
  }
}

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedTopic: '',
      clickCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState(previousState => {
      let newClickCount = previousState.clickCount;
      if (previousState.clickedTopic === event.target.id && newClickCount < 1) {
        newClickCount++;
      } else {
        newClickCount = 0;
      }
      return {
        clickedTopic: event.target.id,
        clickCount: newClickCount
      };
    });
  }

  render() {
    return (
      <div className='container'>
        {
          this.props.topics.map(element => {
            return <TopicCard key={element.id} clickCount={this.state.clickCount} clickedTopicID={this.state.clickedTopic} id={element.id} topic={element.topic} detail={element.detail} onClick={this.handleClick} />;
          })
        }
      </div>
    );
  }
}
