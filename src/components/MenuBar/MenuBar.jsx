import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container } from 'semantic-ui-react'


export default class MenuBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary>
        <Container>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            as={Link}
            content='Home'
            to='/'
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='rated'
            as={Link}
            active={activeItem === 'rated'}
            content='Top 10 Rated Videos'
            to='/rated'
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name='commented'
            as={Link}
            active={activeItem === 'commented'}
            content='Top 10 Commented Videos'
            to='/commented'
            onClick={this.handleItemClick}
          />

           <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}