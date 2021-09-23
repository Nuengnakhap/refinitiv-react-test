const args = process.argv;

if (args.length != 3) {
  console.log("FUND CODE is required!");
  return process.exit(1);
}

const FUND_CODE = args[2];

const http = require("http");

const options = {
  host: "codequiz.azurewebsites.net",
  path: "/",
  headers: { cookie: "hasCookie=true" },
};
const request = http.request(options, function (res) {
  let data = "";
  res.on("data", function (chunk) {
    data += chunk;
  });
  res.on("end", function () {
    const tableData = data.match(/<td>.*?<\/td>/g);
    const indexFund = tableData.findIndex((item) => item.includes(FUND_CODE));
    if (indexFund == -1) {
      console.log("FUND CODE NOT FOUND!");
    } else {
      const result = tableData[indexFund + 1]
        .replace("<td>", "")
        .replace("</td>", "");
      console.log(result);
    }
    process.exit(1);
  });
});
request.on("error", function (e) {
  console.log(e.message);
});
request.end();
