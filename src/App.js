import React from "react";
import Dashboard from "./component/pages/Dashboard";
import LogIn from "./component/pages/LogIn";
import useState from "react";
import { useSelector } from "react-redux";
import ManageToken from "./component/ManageToken";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import CartDetails from "./component/pages/CartDetails";
import CheckOut from "./component/pages/CheckOut";
const { token, setToken } = ManageToken();
function App(props) {
	const state = useSelector((state) => {
		console.log("state", state);
		return state;
	});
	console.log("kkkkkkk", state);
	(function addToken() {
		sessionStorage.setItem(
			"token",
			JSON.stringify(state?.Auth?.accessToken),
		);
	})();

	function returnToken() {
		const tokenString = sessionStorage.getItem("token");
		// const userToken = JSON.parse(tokenString);
		return tokenString;
	}
	const token = returnToken();
	console.log("tokedddddd", token);
	if (token == undefined) {
		<LogIn />;
	} else {
		return (
			<Routes>
				<Route exact path="/" element={<Dashboard />}></Route>

				<Route exact path="/login" element={<LogIn />}></Route>

				<Route exact path="/cart" element={<CartDetails />}></Route>
				<Route exact path="checkout" element={<CheckOut />}></Route>
				{/* <Route exact path="/contact" Component={<Contact />}></Route> */}
			</Routes>
		);
	}
}

export default App;
