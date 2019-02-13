let patientsAll= "/patient/all";

//////////////////////////Get Ajax to display patients data on a table/////////////////////////////////////////////////////////////////////////
function makeAjaxGet(url, callback){
    let xhr = new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4&&xhr.status===200){
            callback(this);
        }
    }
    xhr.send();
}

    function printResponse(xhrObj){
        let jsonResponse = xhrObj.response;
        let patients = JSON.parse(jsonResponse);
        for(patient of patients){
        addRow(patient.id, patient.firstName, patient.lastName, patient.heartRate, (patient.doctor.firstName+" "+patient.doctor.lastName));
    }
}
makeAjaxGet(patientsAll, printResponse);

function addRow(id, firstName, lastName, heartRate, doctor){

    let row = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");
    let cell4 = document.createElement("td");
    let cell5 = document.createElement("td");

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);

    cell1.innerHTML=id;
    cell2.innerHTML=firstName;
    cell3.innerHTML=lastName;
    cell4.innerHTML=heartRate;
    cell5.innerHTML=doctor;

    document.getElementById("table").appendChild(row);
}

