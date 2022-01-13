import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">NFT FireWallet</span>
				</Link>
				<div className="ml-auto">
					{/* <Link to="/demo">
						<button className="btn btn-primary mx-2">Check the Context in action</button>
					</Link> */}
					{ !store.token ? <Link to="/signup">
						<button className="btn btn-primary mx-3 px-4">Sign Up</button>
					</Link> :  <button onClick={() => actions.logout()} className="btn btn-primary mx-3 px-4">Logout</button> }
					
					
				</div>
			</div>
		</nav>
	);
};
