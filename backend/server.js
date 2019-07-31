let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let contacts = [
	{
		id: 1,
		FirstName: "Nelly",
		LastName: "Anderson",
		Address: "Not specified",
		Company: "ШахтаСпецСтрой",
		Skype: "-",
		Phone: "145455775511",
		Email: "alex@gmail.com",
		Photo: "./sources/styles/img/nouser.jpg",
		Birthday: "1970-07-07"
	},
	{
		id: 2,
		FirstName: "Doris",
		LastName: "Vinisky",
		Address: "",
		Company: "",
		Skype: "-",
		Phone: "155457871111",
		Email: "doris@gmail.com",
		Photo: "./sources/styles/img/nouser.jpg",
		Birthday: "1976-05-03"
	},
	{
		id: 3,
		FirstName: "Alex",
		LastName: "Brown",
		Address: "Moskow, Линейная 78-854",
		Company: "Belcoop",
		Skype: "somekun",
		Phone: "744545554391",
		Email: "alex@gmail.com",
		Photo: "./sources/styles/img/nouser.jpg",
		Birthday: "1990-07-17"
	}
];

app.get("/", (req, res) => {
	res.send("API for test project");
});

app.get("/contacts", (req, res) => {
	res.status(200).send(contacts);
});

app.get("/contacts/:id", (req, res) => {
	let contact = contacts.find(_contact => _contact.id === Number(req.params.id));
	res.status(200).send(contact);
});

app.post("/contacts", (req, res) => {
	let contact = {
		id: Date.now(),
		FirstName: req.body.FirstName,
		LastName: req.body.LastName,
		Address: req.body.Address,
		Company: req.body.Company,
		Skype: req.body.Skype,
		Phone: req.body.Phone,
		Email: req.body.Email,
		Photo: req.body.Photo,
		Birthday: req.body.Birthday
	};

	contacts.push(contact);
	res.status(200).send(contact);
});

app.put("/contacts/:id", (req, res) => {
	let contact = contacts.find(_contact => _contact.id === Number(req.params.id));
	contact.FirstName = req.body.FirstName;
	contact.LastName = req.body.LastName;
	contact.Address = req.body.Address;
	contact.Company = req.body.Company;
	contact.Skype = req.body.Skype;
	contact.Phone = req.body.Phone;
	contact.Email = req.body.Email;
	contact.Photo = req.body.Photo;
	contact.Birthday = req.body.Birthday;
	res.status(200).send();
});

app.delete("/contacts/:id", (req, res) => {
	contacts = contacts.filter(contact => contact.id !== Number(req.params.id));
	res.status(200).send();
});

app.listen(3012, () => {
	console.log("API app started");
});
