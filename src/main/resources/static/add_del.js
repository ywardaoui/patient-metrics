let patientsAll= "/patient/all";
let patientAdd= "/patient";

///////////////////////////////////////////////////////////////////////////////
	document.getElementById('submit').addEventListener('click',addToTable);
///////////////////Adding a new customer////////////////////////////////////////////////////////////
  function makeAjaxPost(url, callback, newUserObject){
      let xhr = new XMLHttpRequest();
      xhr.open("POST", url,true);
      xhr.onreadystatechange = function(){
          if(xhr.readyState===4&&xhr.status===201){
              //window.location.reload();
              callback(this);
          }
          else if (xhr.status === 500){
        	   document.getElementById("duplicate_ID").innerHTML = "Duplicate Id detected, please enter different Id Number";
        	   document.getElementById("refresh").removeAttribute("hidden");
          }
      }
      xhr.setRequestHeader("Content-Type","application/json");
      let jsonUser = JSON.stringify(newUserObject);
      xhr.send(jsonUser);
  }

function printRes(xhrObj){
	//console.log(xhrObj.response);
 }

function addToTable(){
	var str = document.getElementById("select").value;
	var docId = /^[^\d]*(\d+)/.exec(str)[0];
	  let docNum=parseInt(docId);

	 let newPatient = {
	 "id": document.getElementById("id").value,
	 "firstName":document.getElementById("fname").value,
	 "lastName":document.getElementById("lname").value,
	 "heartRate": document.getElementById("heartRate").value,
	 "doctor":{
		 "id": docNum
	          }
	}
	 makeAjaxPost(patientAdd,printRes,newPatient);
}
		  
/////////////////this Ajax is just to grab the doctor (first and last name) in drop list choices////////////////////////////////////////////////////////////////
    var myObj, x, txt="";
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function doc() {
      if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        txt += "<select id=\"select\">"
        for (x in myObj) {
          txt += "<option>" +myObj[x].id+" "+myObj[x].firstName+" "+myObj[x].lastName;
        }
        txt += "</select>"
        document.getElementById("demo").innerHTML = txt;
      }
    };
    xmlhttp.open("GET", "/doctor/all", true);
    xmlhttp.send();     
  ////////////////////////////Deleting an existing Patient/////////////////////////////////////////////////////////////  
document.getElementById('delete').addEventListener('click',deleteFromTable);
  //////////////////////this Ajax is just to grab the patient's (id,first and last name) in drop list choices//////////////////////////////////////////////////////////////////
    var myObj2, x2, txt2="";
    let xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = function doc() {
      if (this.readyState == 4 && this.status == 200) {
        myObj2 = JSON.parse(this.responseText);
        txt2 += "<select id=\"selected\">"
        for (x2 in myObj2) {
          txt2 += "<option>" +myObj2[x2].id+" "+myObj2[x2].firstName+" "+myObj2[x2].lastName;
        }
        txt2 += "</select>"
        document.getElementById("del").innerHTML = txt2;
      }
    };
    xmlhttp2.open("GET", "/patient/all", true);
    xmlhttp2.send();  
 ///////////////////////////////Main Ajax to delete the patient based on id from above ajax////////////////////////////////////////////////////////////
    
    function makeAjaxDelete(url, callback, delUserObject){
        let xhr = new XMLHttpRequest();
        xhr.open("DELETE", url,true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState===4&&xhr.status===200){
                var jsonUser = JSON.stringify(delUserObject).serializeArray();
                callback(this);
            }
            //else console.log(xhr.response)
            
        }
        console.log(delUserObject);
       xhr.setRequestHeader("Content-Type","application/json");
        let jsonUser = JSON.stringify(delUserObject);
        xhr.send(jsonUser);
    }

  function printResp(xhrObj){
  	console.log(xhrObj.response);
   }

  function deleteFromTable(){
	  
  let str = document.getElementById("selected").value;
  let patientId = /^[^\d]*(\d+)/.exec(str)[0];
  let num=parseInt(patientId);
  console.log(patientId);
  
  let delPatient ={
	  "doctor": {
	    "firstName": "string",
	    "id": 1,
	    "lastName": "string",
	  },
	  "firstName": "string",
	  "heartRate": 0,
	  "id": num,
	  "lastName": "string",
	}
		  
  console.log(delPatient);
  	 makeAjaxDelete("/patient",printResp,delPatient);
  }

  /////////////////////////////Ajax to Update an existig Patient////////////////////////////////////////////////////////////  
  document.getElementById('update').addEventListener('click',updatePatient);
    ////////////////////////////////////////////////////////////////////////////////////////
  function makeAjaxUpdate(url, callback, newUserObject){
      let xhr = new XMLHttpRequest();
      xhr.open("PUT", url,true);
      xhr.onreadystatechange = function(){
          if(xhr.readyState===4&&xhr.status===201){
             // window.location.reload();
              callback(this);
          }
         else console.log(xhr.response)
      }
      xhr.setRequestHeader("Content-Type","application/json");
      let jsonUser = JSON.stringify(newUserObject);
      xhr.send(jsonUser);
      //window.location.reload();

  }


function printRes(xhrObj){
	//console.log(xhrObj.response);
 }


function updatePatient(){
	var str = document.getElementById("select").value;
	var docId = /^[^\d]*(\d+)/.exec(str)[0];
	  let docNum=parseInt(docId);

	
	 let updateAPatient = {
	 "id": document.getElementById("id").value,
	 "firstName":document.getElementById("fname").value,
	 "lastName":document.getElementById("lname").value,
	 "heartRate": document.getElementById("heartRate").value,
	 "doctor":{
		 "id": docNum,
	          }
	}
	 makeAjaxUpdate(patientAdd,printRes,updateAPatient);
}

///////////////////////////////////////////////////////////////////////////////////////////////
