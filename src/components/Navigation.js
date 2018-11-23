import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<header>
				<Navbar dark expand="md" className="fixed-top">
					<NavbarBrand href="/">Brandi</NavbarBrand>
					<div className="sep">|</div>
					<div className="tagline">I am your tag line</div>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="#">Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#">Features</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#">Works</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#">Team</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#">Contact</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</header>
		);
	}
}

export default Navigation;
