const md5 = require("js-md5");
const fetch = require("node-fetch");
const compareChanges = require("../utils/compareChanges");

async function calculateHash(oldLink, newLink) {
  const oldPdf = await fetch(oldLink);
  const newPdf = await fetch(newLink);

  const oldPdfBuff = await oldPdf.arrayBuffer();
  const newPdfBuff = await newPdf.arrayBuffer();

  const oldMd5Hash = await md5(oldPdfBuff);
  const newMd5Hash = await md5(newPdfBuff);

  const correctLink = await compareChanges(oldLink, newLink);
  const correctHash = await compareChanges(oldMd5Hash, newMd5Hash);

  const changes = oldMd5Hash === newMd5Hash ? false : true;
  const obj = {
    oldLink: oldLink,
    newLink: newLink,
    correctLink: correctLink,
    correctHash: correctHash,
    oldMd5Hash: oldMd5Hash,
    newMd5Hash: newMd5Hash,
    changes: changes,
  };
  return obj;
}

module.exports = calculateHash;
