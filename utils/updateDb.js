const Links = require("../models/link");

async function updateDb(URLlink, md5Hash) {
  return Links.findOneAndUpdate(
    { link: URLlink },
    {
      $set: {
        link: URLlink,
        hash: md5Hash,
      },
    },
    { new: true, multi: true }
  ).exec((err, data) => {
    if (err) console.log(err);
    console.log(data);
  });
}

module.exports = updateDb;
