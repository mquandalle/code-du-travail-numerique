const matchers = [
  "convention collective",
  "conventions collectives",
  "accords de branches",
  "accord de branche",
  "disposition conventionnelle",
  "dispositions conventionnelles",
];

function execOne(htmlContent, match) {
  const re = new RegExp(match, "g");
  return htmlContent.replace(
    re,
    `<webcomponent-tooltip text="${match}" content="Convention collective tooltip"></webcomponent-tooltip>`
  );
}

function addTags(htmlContent) {
  return matchers.reduce((updatedContent, match) => {
    return execOne(updatedContent, match);
  }, htmlContent);
}

module.exports = { addTags };
