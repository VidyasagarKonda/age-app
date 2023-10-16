import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavbarBrand,
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  FormGroup,
  Form,
  Input,
  Label,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }
  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }

  render() {
    return (
      <>
        <div className='jumbotron'>
          <div className='container'>
            <div className='row row-header'>
              <div className='col-12 col-sm-6'>
                <h1>TimoScope </h1>
                <p>
                  Give me your date of bith I will show you some intresting
                  facts!
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
