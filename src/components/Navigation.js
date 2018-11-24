import React from 'react';
import ScrollspyNav from 'react-scrollspy-nav';
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
					<Collapse className="justify-content-end" isOpen={this.state.isOpen} navbar>
						<ScrollspyNav
							scrollTargetIds={[ 'home', 'features', 'works', 'team', 'contact' ]}
							activeNavClass="is-active"
							scrollDuration="1000"
						>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink href="#home">Home</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="#features">Features</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="#works">Works</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="#team">Team</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="#contact">Contact</NavLink>
								</NavItem>
							</Nav>
						</ScrollspyNav>
					</Collapse>
				</Navbar>
			</header>
		);
	}
}

export default Navigation;
