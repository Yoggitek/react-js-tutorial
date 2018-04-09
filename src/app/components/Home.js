import React from 'react';

export class Home extends React.Component {
  render() {
    const text = 'Pass a text in React Js';
    console.log(this.props);
    return (
      <div>
        <p>This is a Home component</p>
        <p>{text}</p>
        <p>Your name is {this.props.name}, your age is {this.props.age}</p>
        <p>User Object => Name: {this.props.user.name}</p>
        <div>
          <h4>Hobbies</h4>
          <ul>
            {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
          </ul>
        </div>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  user: React.PropTypes.object,
  children: React.PropTypes.element.isRequired
};
