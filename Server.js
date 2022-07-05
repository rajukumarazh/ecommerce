const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.post("/login", (req, res) => {
// 	// res.send({ token: 123 });
// 	 const { email, password } = req.body;
// 	res.send({ requestBody: req.body.email });
// });
// const jwt = require("jsonwebtoken");
// const bodyParser = require("body-parser");

app.use(bodyParser.json());
const accessTokenSecret = "youraccesstokensecret";
const users = [
	{
		email: "raju",
		password: "kumar",
		role: "admin",
	},
	{
		email: "kumar",
		password: "raju",
		role: "member",
	},
];
app.use("/login", (req, res) => {
	// Read username and password from request body
	const { email, password } = req.body;
	console.log("ekk", email, password);

	// Filter user from the users array by username and password
	const user = users.find((u) => {
		return u.email === email && u.password === password;
	});

	if (user) {
		// Generate an access token
		const accessToken = jwt.sign(
			{ username: user.email, role: user.role },
			accessTokenSecret,
		);

		res.json({
			accessToken,
		});
	} else {
		res.send("Username or password incorrect");
	}
});

app.listen(8000, () =>
	console.log("API is running on http://localhost:8000/login"),
);
