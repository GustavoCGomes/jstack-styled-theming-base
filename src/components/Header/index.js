import React, { Component } from 'react';

import { Container } from './styles';

export default class Header extends Component {
  render() {
    const { onToggleTheme, selectdTheme} = this.props;

    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button 
          type="button"
          onClick={onToggleTheme}
        >
          {selectdTheme === 'dark' ? '🌞' : '🌚'}
        </button>
      </Container>
    );
  }
}
