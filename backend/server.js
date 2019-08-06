const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const contactsController = require("./controllers/contacts");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
	res.send("API for test project");
});

app.get("/contacts", contactsController.all);

app.get("/contacts/:id", contactsController.findById);

app.post("/contacts", contactsController.create);

app.put("/contacts/:id", contactsController.update);

app.delete("/contacts/:id", contactsController.delete);

db.connect("mongodb://localhost:27017/task4", (err) => {
	if (err) {
		console.log(err);
	}
	else {
		app.listen(3012, () => {
			console.log("API app started");
		});
	}
});
