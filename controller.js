const { application } = require("express");
const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.", "A fresh start will put you on your way.", "A friend is a present you give yourself.", "A gambler not only will lose what he has, but also will lose what he does not have."];
let affs = ["I am successful.", "I am confident.", "I am an unstoppable force of nature.", "I am strong.", "I am getting better and better every day."];

module.exports = {
    getCompliment: (req, res) => {
              
        // choose random compliments
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }, 
    getFortune: (req, res) => {
                
        let randomFI = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomFI];
        
        res.status(200).send(randomFortune);
    },    
    
    getAffAll:(req,res) => {
        res.status(200).send(affs);
    },    
    addAff: (req, res) =>{
        affs.push(req.body.newAff);
        
        res.status(200).send("Your Affirmation :- "+req.body.newAff+ "has been added");
    },
    updateAff:(req,res) => {
        console.log("Updating" + req);
        const aff = req.body.oldAff;
        // const {newAff} = req.body;
        const newAff = req.body.newAff;
        console.log("Updating "+ aff);
        let updateIndex = affs.indexOf(aff);
        console.log(updateIndex);
        if (updateIndex === -1) {
            res.status(400).send("Affirmation not found");
            return;
        }
        console.log("Blah" + newAff)
        affs[updateIndex] = newAff;
        console.log("*Updated");
        res.status(200).send(aff +" Update was successful");
    },
    deleteAff:(req,res) => {
        console.log("Deleting"); 
        const {aff} = req.body;
        console.log(aff);
        let deleteIndex = affs.indexOf(aff);
        console.log(deleteIndex);
        if (deleteIndex === -1) {
            res.status(400).send("Affirmation not found");
            return;
        }
        affs.splice(deleteIndex, 1);
        console.log("*Deleted");
        res.status(200).send(aff +" Delete was successful");

    },


    
}
