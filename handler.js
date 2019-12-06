const AWS = require("aws-sdk");
const RDS = new AWS.RDSDataService();

module.exports.hello = async (event, context) => {
  try {
    const params = {
      secretArn: process.env.SECRET_ARN,
      resourceArn: process.env.CLUSTER_ARN,
      sql: `SELECT * FROM testAurora.testTb`,
      database: process.env.DB_NAME
    };

    let data = await RDS.executeStatement(params).promise();

    console.log(JSON.stringify(data, null, 2));

    return "done";
  } catch (e) {
    console.log(e);
  }
};
