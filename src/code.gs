var ddu = null; // array of {circles} for now
var delayMiliseconds = null;
function doGet(request) {
  // read ddu name from the request header
  const defaultDduName = "Sakura";
  const dduName = request?.parameter['ddu'] ?? defaultDduName;
  console.log(`loading ddu named "${dduName}"`);
  const file = getDduFile(dduName);
  if (file) {
    ddu = parseDdu(file);
  }
  const defaultDelayMiliseconds = 40;
  delayMiliseconds = request?.parameter['delay'] ?? defaultDelayMiliseconds;

  return HtmlService.createTemplateFromFile('index')
      .evaluate();
}

function passRequestParameters() {
  return HtmlService.createHtmlOutput(`<script>var ddu = ${JSON.stringify(ddu)}; var delayMiliseconds = ${delayMiliseconds};</script>`)
    .getContent();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

// look for "<name>.ddu" in the Dodeca Meditation Collection on Google Drive
function getDduFile(name) {
  const filename = name + ".ddu";
  const folderId = "19Y8zySkMQXaMJY3UNYna8agMlqx8qnBQ"; // Dodeca Meditation Collection id
  const folder = DriveApp.getFolderById(folderId);
  console.log(`looking thru folder "${folder}" for file "${filename}"`);
  const files = folder.getFilesByName(filename);
  if (files.hasNext()) {
    const file = files.next();
    console.log(`found ddu file "${file}"`);
    return file;
  } else {
    return null;
  }
}
