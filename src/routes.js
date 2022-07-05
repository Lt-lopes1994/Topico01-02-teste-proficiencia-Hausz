const express = require("express");

const { readCSV, getAll, getById } = require("./controllers/csv");

const {
  registerCustomerOmie,
  getCustomer,
  listCostumers,
  deleteCustomer,
} = require("./controllers/rotasOmieClientes");

const {
  registerOrder,
  consultOrder,
  listOrders,
} = require("./controllers/pedidosDeVenda");

const {
  registerUser,
  informationToTheUserHimself,
  updateUser,
} = require("./controllers/users");
const login = require("./controllers/login");

const {
  registerCustomer,
  delinquentCustomerHighligths,
  allDelinquentCustomers,
  highlightsCustomersUpToDate,
  allCustomersUpToDate,
  customers,
  customerDetail,
  customerUpdate,
} = require("./controllers/customers");

const {
  collectionHighlights,
  totalAmountAllCharges,
  highlightsOverdueCollections,
  allOverdueCharges,
  highlightsExpectedCharges,
  allAnticipatedCharges,
  highlightsPaidCharges,
  allChargesPaid,
  billingRegister,
  billingList,
  billingEdit,
  deleteCharge,
  billingDetails,
} = require("./controllers/charges");

const checkLogin = require("./middlewares/checkLogin");

const routes = express();

routes.post("/signup", registerUser);
routes.post("/login", login);

routes.use(checkLogin);

//?? Leitura do arquivo CSV e salvamento no banco de dados.
routes.post("/products", readCSV);
routes.get("/products", getAll);
routes.get("/products/:id", getById);

//?? CRUD do primeiro tópico.
routes.get("/user", informationToTheUserHimself);
routes.patch("/user/updateUser", updateUser);

routes.get("/totalAmountAllCharges", totalAmountAllCharges);

routes.get("/collectionHighlights", collectionHighlights);
routes.get("/highlightsOverdueCollections", highlightsOverdueCollections);
routes.get("/allOverdueCharges", allOverdueCharges);
routes.get("/highlightsExpectedCharges", highlightsExpectedCharges);
routes.get("/allAnticipatedCharges", allAnticipatedCharges);
routes.get("/highlightsPaidCharges", highlightsPaidCharges);
routes.get("/allChargesPaid", allChargesPaid);

routes.post("/registerCustomer", registerCustomer);
routes.get("/delinquentCustomerHighligths", delinquentCustomerHighligths);
routes.get("/allDelinquentCustomers", allDelinquentCustomers);
routes.get("/highlightsCustomersUpToDate", highlightsCustomersUpToDate);
routes.get("/allCustomersUpToDate", allCustomersUpToDate);
routes.get("/customers", customers);
routes.get("/customerDetail/:id_customer", customerDetail);
routes.patch("/customerUpdate/:id_customer", customerUpdate);

routes.post("/billingRegister/:client_id", billingRegister);
routes.get("/billingList", billingList);
routes.patch("/billingEdit/:id_charge", billingEdit);
routes.delete("/deleteCharge/:id_charge", deleteCharge);
routes.get("/billingDetails/:id_charge", billingDetails);

//?? crud do terceiro tópico.

routes.post("/registerCustomerOmie", registerCustomerOmie);
routes.post("/getCustomer", getCustomer);
routes.post("/listCustomers", listCostumers);
routes.post("/deleteCustomer", deleteCustomer);

routes.post("/registerOrder", registerOrder);
routes.post("/consultOrder", consultOrder);
routes.post("/listOrders", listOrders);

module.exports = routes;
