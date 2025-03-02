const testapi = async (req, res) => {
  try {
    console.log("Test API called");
    res.status(200).json({ message: "Test API is working!" }); // Send a JSON response
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
};



module.exports = { testapi };