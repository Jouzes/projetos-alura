const sessionStore = require("../util/sessionStorage");
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const controller = require("../controllers/index");
const session = require("express-session");

router.use(
  session({
    secret: "ausuhaskpds",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  }),
) / router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", controller.showIndex);
router.post("/", controller.login);
router.get("/signup", controller.showPageSignUp);
router.post("/signup", controller.signup);
router.get("/members", controller.checkAuth, controller.showMembersPage);
router.get("/logout", controller.logout);
router.use(controller.get404Page);

module.exports = router;
