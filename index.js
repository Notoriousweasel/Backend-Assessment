const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addAff, updateAff, deleteAff, getAffAll  } = require('./controller')



app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/aff/all", getAffAll);
app.post("/api/aff", addAff);
app.put("/api/aff", updateAff);
app.delete("/api/aff", deleteAff);




const PORT = 4000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
