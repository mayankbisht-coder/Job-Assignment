const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUri =
    "mongodb+srv://mayankbisht:JMSzar9YBBtelfpz@cluster0.4axzh57.mongodb.net/?retryWrites=true&w=majority";

  try {
    const connect = await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`mongoDB connected : ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
