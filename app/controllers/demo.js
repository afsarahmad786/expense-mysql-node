// const Product = require("../model/booking");
var path = require("path");
const Expense = require("../model/booking");
const User = require("../model/booking");
// const { use } = require("../routes/booking");
exports.getuser = (req, res, next) => {
  // res.render("admin/edit-product", {
  //   pageTitle: "Add Product",
  //   path: "/admin/add-product",
  //   editing: false,
  // });

  res.sendFile(path.resolve("views/index.html"));
};

exports.adduser = (req, res, next) => {
  console.log(req.body);
  const exp = req.body.exp;
  const des = req.body.des;
  const categ = req.body.categ;
  console.log(exp, des, categ);
  Expense.create({
    exp: exp,
    des: des,
    categ: categ,
  })
    .then((result) => {
      console.log("Created Expenses");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getalluser = (req, res, next) => {
  let result;
  const expens = Expense.findAll()

    .then((results) => res.json(results))
    .catch((err) => console.log(err));
};

exports.deleteuser = (req, res, next) => {
  const userid = req.params.userid;
  console.log(userid);
  Expense.findByPk(userid)
    .then((data) => {
      console.log(data);
      return data.destroy();
    })
    .then((result) => {
      console.log("DESTROYED User");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};
