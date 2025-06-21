import React from 'react';

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s ease',
};

const hoverStyle = {
  backgroundColor: '#0056b3',
};

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHovering: false };
  }

  handleMouseEnter = () => this.setState({ isHovering: true });
  handleMouseLeave = () => this.setState({ isHovering: false });

  render() {
    const { children, onClick, type = 'button', style = {} } = this.props;
    const { isHovering } = this.state;

    return (
      <button
        type={type}
        onClick={onClick}
        style={{
          ...buttonStyle,
          ...(isHovering ? hoverStyle : {}),
          ...style,
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
      </button>
    );
  }
}

export default Button;
