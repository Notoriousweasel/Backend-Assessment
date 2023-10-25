//const { getAffAll } = require("../server/controller");

const complimentBtn = document.getElementById("complimentBtn")
const fortuneBtn = document.getElementById("fortuneBtn")
const addAffBtn = document.getElementById("addAffBtn")
const baseURL = "http://localhost:4000/api/";


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
//1

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")  //`${baseURL}fortune/`
    .then(res => {
        const data = res.data;
        alert(data);
    });
};
//2

const addAff = () => {
    let newAff = document.getElementById("add").value;
    
    const body={newAff}
        axios.post(`${baseURL}aff/`, body)
        .then(res => {
          document.getElementById("add").value = "";
            console.log(res.data);
            
            getAffAll();
            
    })
    .catch(error => console.log(error))
  };

  //3
  
  const getAffAll = () => {
  axios.get(`${baseURL}aff/all`)
    .then(res => {
      const affs = res.data;
      const affList = document.getElementById('affList');
      console.log("*****"+ affs);
      affList.innerHTML = '';
  
      affs.forEach(aff => {
        const affContainer = document.createElement('div');
        affContainer.classList.add('aff-container');
  
        const affText = document.createElement('div');
        affText.classList.add('aff-text');
        affText.innerText = aff;
  
        const affActions = document.createElement('div');
        affActions.classList.add('aff-actions');
  
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', () => deleteAff(aff));
  
        const updateBtn = document.createElement('button');
        updateBtn.innerText = 'Update';
        updateBtn.addEventListener('click', () => updateAff(aff));
        
        affContainer.appendChild(affText);
        affContainer.appendChild(affActions);
       
        affActions.appendChild(updateBtn);
        affActions.appendChild(deleteBtn);
        
  

  
        affList.appendChild(affContainer);
      });
    })
    .catch(error => {
      console.error(error);
    });
  }
   //4

   const updateAff = (aff) => {
    const updatedAff = prompt('Enter the updated affirmation:');
    console.log("Updated.") //+ updatedAff + " " + aff)
    const body =  { oldAff: aff, newAff: updatedAff };
       if (updatedAff) {
        axios.put(`${baseURL}aff`, body )
        // axios.put(`${baseURL}aff`, { oldAff: aff, newAff: updatedAff } )
        .then(res => {
        console.log(res.data);
        getAffAll();
        })
         .catch(error => {
           console.error("Somthing is wrong " + error);
     });
    }
  }
   //5

    const deleteAff = (aff) => {
    console.log("Deleting " + aff)
    const body ={aff};
  
    axios.delete(`${baseURL}aff` , { data: body } )
      .then(res => {
        //console.log(res.data);
        getAffAll();
      })
       .catch(error => {
         console.error("Something is not right!" + error);
       });
  }


  //Event listeners

  document.addEventListener("DOM DOM DOM DOM!", getAffAll);
  
  getAffAll();
  complimentBtn.addEventListener('click', getCompliment);
  fortuneBtn.addEventListener('click', getFortune);
  addAffBtn.addEventListener('click', addAff);