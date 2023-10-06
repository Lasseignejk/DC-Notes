import "./index.css";
import BellIcon from "./icons/BellIcon";
import ArrowIcon from "./icons/ArrowIcon";
import BoltIcon from "./icons/BoltIcon";
import CaretIcon from "./icons/CaretIcon";
import ChevronIcon from "./icons/ChevronIcon";
import CogIcon from "./icons/CogIcon";
import MessengerIcon from "./icons/MessengerIcon";
import PlusIcon from "./icons/PlusIcon";

import { useState } from "react";

function App() {
	return (
		<>
			{/* the li in the navbar is a prop and will be rendered in the Navbar component where {props.children} is */}
			<Navbar>
				<NavItem icon={<PlusIcon />} />
				<NavItem icon={<BellIcon />} />
				<NavItem icon={<MessengerIcon />} />
				<NavItem icon={<CaretIcon />}>
					{/* dropdown goes here */}
				</NavItem>
			</Navbar>
			<div>
				<a href="https://www.youtube.com/watch?v=IF6k0uZuypA">
					Tutorial
				</a>
			</div>
		</>
	);
}

function Navbar(props) {
	return (
		<nav className="navbar">
			<ul className="navbar-nav">{props.children}</ul>
		</nav>
	);
}

function NavItem(props) {
	const [open, setOpen] = useState(false);
	return (
		<li className="nav-item">
			<a href="#" className="icon-button" onClick={() => setOpen(!open)}>
				{props.icon}
			</a>
		</li>
	);
}

export default App;
