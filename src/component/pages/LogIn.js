import React, { useEffect } from "react";
import { useState } from "react";
import { FaAmazon } from "react-icons/fa";
import { login, logout } from "../../redux/actions/authAction";
import { useSelector, useDispatch } from "react-redux";
import ManageToken from "../ManageToken";
function LogIn() {
	const log = useDispatch(login);
	const [getToken, setToken] = useState();
	const [details, setDetails] = useState({
		email: "",
		password: "",
		token: "",
	});
	useEffect(async () => {
		const st = await getToken;
		// log(login({ ...d
		// 	token: getToken }));
		setDetails({ ...details, token: st });
		log(login({ ...details, token: st?.accessToken }));
	}, [getToken]);

	async function loginUser(currentUser) {
		return fetch("http://localhost:8000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(currentUser),
		}).then((result) => result.json());
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		const token = await loginUser(details);
		setToken(token);
		setDetails({ ...details, token: getToken });
		// if (getToken !== undefined) {
		// 	log(login({ token: token }));
		// }
	};

	console.log("getToken", getToken);
	console.log("details", details);
	return (
		<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<form
				className="max-w-md w-full space-y-8"
				onSubmit={handleSubmit}
			>
				<div>
					<FaAmazon
						size={50}
						className="mx-auto h-12 w-auto text-blue-400"
					/>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Sign in to your account
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Or
						<a
							href="#"
							className="font-medium text-indigo-600 hover:text-indigo-500"
						>
							{" "}
							start your 14-day free trial{" "}
						</a>
					</p>
				</div>
				<div className="mt-8 space-y-6" action="#">
					<input type="hidden" name="remember" value="true" />
					<form className="rounded-md shadow-sm -space-y-px">
						<div className="">
							<label className="sr-only">
								Email address
							</label>
							<input
								onChange={(e) =>
									setDetails({
										...details,
										email: e.target.value,
									})
								}
								id="email-address"
								name="email"
								type="email"
								autocomplete="email"
								required
								className="appearance-none  rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Email address"
							/>
						</div>
						<div>
							<label for="password" className="sr-only">
								Password
							</label>
							<input
								onChange={(e) =>
									setDetails({
										...details,
										password: e.target.value,
									})
								}
								name="password"
								type="password"
								autocomplete="current-password"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Password"
							/>
						</div>
					</form>

					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
							/>
							<label
								for="remember-me"
								className="ml-2 block text-sm text-gray-900"
							>
								{" "}
								Remember me{" "}
							</label>
						</div>

						<div className="text-sm">
							<a
								href="#"
								className="font-medium text-indigo-600 hover:text-indigo-500"
							>
								{" "}
								Forgot your password?{" "}
							</a>
						</div>
					</div>

					<div>
						<button
							onClick={async () => log(login(details))}
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							<span className="absolute left-0 inset-y-0 flex items-center pl-3">
								<svg
									className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
										clip-rule="evenodd"
									/>
								</svg>
							</span>
							Sign in
						</button>
					</div>
				</div>
			</form>
		</div>
		// <div className="App">
		// 	<form onSubmit={handleSubmit}>
		// 		<input
		// 			onChange={(e) =>
		// 				setDetails({
		// 					...details,
		// 					email: e.target.value,
		// 				})
		// 			}
		// 			type="text"
		// 			value={details.email}
		// 			placeholder="Email"
		// 		/>
		// 		<input
		// 			type="text"
		// 			value={details.password}
		// 			placeholder="password"
		// 			onChange={(e) =>
		// 				setDetails({
		// 					...details,
		// 					password: e.target.value,
		// 				})
		// 			}
		// 		/>

		// 		<button type="submit">Log IN</button>
		// 	</form>
		// </div>
	);
}

export default LogIn;
