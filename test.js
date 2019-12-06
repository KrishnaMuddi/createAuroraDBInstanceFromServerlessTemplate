const AWS = require("aws-sdk");
var credentials = new AWS.SharedIniFileCredentials({ profile: "personal" });
AWS.config.credentials = credentials;
AWS.config.update({ region: "us-east-1" });
const data = require("data-api-client")({
  secretArn: "secretArn",
  resourceArn: "resourceArn",
  database: "testAurora" // default database
});

async function test() {
  // let result = await data.query(`SELECT * FROM test`);
  // let result = await data.query(
  //   `create table newTest (id int, name varchar(100))`
  // );
  let result1 = await data.query(`show databases`);
  let result2 = await data.query(`show tables`);

  console.log(result1);
  console.log(result2);
}

test();
