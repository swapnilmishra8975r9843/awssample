const logic = async (req, res) => {
  return res.send("req.name");
};
const logic2 = async (req, res) => {
  return res.send("home");
};
const logic3 = async (req, res) => {
  return res.send("about");
};

module.exports = { logic, logic2, logic3 };
