
# Flp-Parser
An Unofficial Node.Js Based Parser For *Fl Studio* Projects. 
Updated Based On The Parser Of [andrewrk](https://github.com/andrewrk/node-flp)
Currently Tested On **Fl Studio 20**

# Usage
```
var flp = require('flp');

flp.readFile("fl20.flp", function(err ,projectInfo) {
  if (err) throw err;
  console.log(flp.Query.getPlugins(projectInfo));
  });
```
**Availiable Quering Methods:**
- getMainVolume
- getMainPitch
- getTempo
- getChannelCount
- getChannels 
- getFLPVersion
- getProjectTitle 
- getTracks 
- getPlugins 

