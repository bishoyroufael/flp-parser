<img src="img/banner.png" width="1070">

# Flp-Parser
An Unofficial Node.Js Based Parser For *Fl Studio* Projects. 
Updated Based On The Parser Of [andrewrk](https://github.com/andrewrk/node-flp), 
Currently Tested On **Fl Studio 20.0**

# Usage
Clone The Repository Using : `git clone https://github.com/b15h0y/flp-parser`

Run The Demo Using : `Node flp.js`

# File API:
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

