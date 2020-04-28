var flp = require('flp');

flp.readFile("fl20.flp", function(err ,projectInfo) {
  if (err) throw err;
  console.log(flp.Query.getPlugins(projectInfo));
  });


