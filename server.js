const express = require("express");
const app = express();

app.use(express.json());

function raspuns(text) {
return {
version: "1.0",
response: {
outputSpeech: {
type: "PlainText",
text: text
},
shouldEndSession: false
}
};
}

app.post("/", async (req, res) => {

let intent = "";

try {
intent = req.body.request.intent.name;
} catch(e){}

let text = "Nu am inteles comanda";

if(intent === "OraIntent")
text = "Ora este " + new Date().toLocaleTimeString("ro-RO");

if(intent === "VremeIntent")
text = "Afara sunt aproximativ 20 de grade.";

if(intent === "AprindeLuminaIntent")
text = "Am aprins lumina.";

if(intent === "StingeLuminaIntent")
text = "Am stins lumina.";

if(intent === "TemporizatorIntent")
text = "Am setat temporizator.";

if(intent === "AlarmaIntent")
text = "Am setat alarma.";

res.json(raspuns(text));

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
console.log("Server pornit"));
