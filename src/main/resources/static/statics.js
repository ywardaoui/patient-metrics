let patientsAll= "/patient/all";
let patientAdd= "/patient";
let links = ["/patient/min","/patient/max","/patient/avg","/patient/median"]
let valuesNames = [" MinOfHeartRate "," MaxOfHeartRate "," AvgOfHeartRate "," MedOfHeartRate "]
let hrpd= "/doctor/all/top";

////////////////////multiple Ajax requests to display Min,Max,Avg,and med results ////////////////////////////////////////////////////////////////////////////////////
function makeAjaxGet(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4&&xhr.status===200){
            callback(this);
        }
    }
    xhr.send();
}

function printResponse2(xhrObj){
  let jsonResponse = xhrObj.response;
  let min = JSON.parse(jsonResponse);
  document.getElementById("min").innerHTML = min;
}
makeAjaxGet(links[0], printResponse2);

function printResponse3(xhrObj){
	  let jsonResponse = xhrObj.response;
	  let max = JSON.parse(jsonResponse);
	  document.getElementById("max").innerHTML = max;
	}
makeAjaxGet(links[1], printResponse3);

function printResponse4(xhrObj){
	let jsonResponse = xhrObj.response;
	let avg = JSON.parse(jsonResponse);
	document.getElementById("avg").innerHTML = avg;
		}
makeAjaxGet(links[2], printResponse4);

function printResponse5(xhrObj){
	let jsonResponse = xhrObj.response;
	let med = JSON.parse(jsonResponse);
	document.getElementById("med").innerHTML = med;
		}
makeAjaxGet(links[3], printResponse5);

/////////////////2 Ajax request to add display highest rate per each doctor//////////////////////////////////////////////////////////////////////////////

  function printResponse8(xhrObj){
let jsonResponse = xhrObj.response;
let doctors = JSON.parse(jsonResponse);
	let arr =Object.keys(doctors);
	let arr2=Object.values(doctors)
	console.log(arr[0]);
	console.log(arr2[0]);

	
///////////////////////this ajax is getting doctor informations and linked with ajax key and value from highest doctor rate table////////////////////////////////////////////////////////////////////////
              var myObj2, x3;
              let xmlhttp3 = new XMLHttpRequest();
              xmlhttp3.onreadystatechange = function doc() {
                if (this.readyState == 4 && this.status == 200) {
                  myObj2 = JSON.parse(this.responseText);
                  
                  for (x3 in myObj2) {
                     var fn =myObj2[x3].firstName;
                     var ln =myObj2[x3].lastName;
                     
                        for (x4 in arr) {
                	      var str = arr[x4];
                	      var docId = /^[^\d]*(\d+)/.exec(str)[1];
                	      let docNum=parseInt(docId);
                	      
                	         if (docNum == myObj2[x3].id){
                                var fn=myObj2[x3].firstName;
                                var ln=myObj2[x3].lastName;
                               addRow2(docNum,fn,ln,arr2[x4]);
                	         }
                        }
                  }
                }
               };
              xmlhttp3.open("GET", "/doctor/all", true);
              xmlhttp3.send();  
  }
/////////////////////this table is a container for given values from our previous 2 ajax requests /////////////////////////////////////////////////////////////////////////

makeAjaxGet(hrpd, printResponse8);


function addRow2(id, firstName, lastName, heartRate){

let row = document.createElement("tr");
let cell1 = document.createElement("td");
let cell2 = document.createElement("td");
let cell3 = document.createElement("td");
let cell4 = document.createElement("td");

row.appendChild(cell1);
row.appendChild(cell2);
row.appendChild(cell3);
row.appendChild(cell4);

cell1.innerHTML=id;
cell2.innerHTML=firstName;
cell3.innerHTML=lastName;
cell4.innerHTML=heartRate;

document.getElementById("table2").appendChild(row);
}