import React from 'react';
import ReactDOM from 'react-dom';
import FHIR from 'fhirclient';

import App from './components/App.tsx';
import './styles/index.scss';
import './utils/fontawesomeLibrary';

const rootElement = document.getElementById('root');

const smartLaunch = () => {
  // Authorize application

  FHIR.oauth2
    .init({
      clientId: 'f5ff1bd2-34e6-4774-a03e-3a989b20bf91',
      scope: 'patient/Patient.read patient/Observation.read launch online_access openid profile',
      iss: "https://fhir-ehr-code.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",
      redirectUri: "http://127.0.0.1:8000/app"
    })
    .then(client => {
      ReactDOM.render(<App client={client} />, rootElement);
    });
};

// FHIR.oauth2.authorize({
//   clientId: "f5ff1bd2-34e6-4774-a03e-3a989b20bf91",
//   scope: "patient/Patient.read patient/Observation.read launch online_access openid profile",
//   iss: "https://fhir-ehr-code.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",
//   patientId: "12724065",
//   redirectUri: "http://127.0.0.1:8000/app",
//   launch: "a7b726f7-ea3c-4ad7-bef4-4eab4b3b0857",
//   response_type: "code"
// });

// FHIR.oauth2.ready().then(function (client) {

//   // Render the current patient (or any error)
//   client.patient.read().then(client => {
//     ReactDOM.render(<App client={client} />, rootElement);
//   });

//   // Get MedicationRequests for the selected patient
//   client.request("/Observation?patient=" + client.patient.id, {
//     resolveReferences: ["valueQuantity"],
//     graph: true
//   })

//     // Reject if no MedicationRequests are found
//     .then(function (data) {
//       if (!data.entry || !data.entry.length) {
//         throw new Error("No observation found for the selected patient");
//       }
//       return data.entry;
//     })


//     // Render the current patient's medications (or any error)
//     .then(
//       function (meds) {
//         document.getElementById("meds").innerText = JSON.stringify(meds, null, 4);
//       },
//       function (error) {
//         document.getElementById("meds").innerText = error.stack;
//       }
//     );

// });

// //   FHIR.oauth2
// //     .init({
// //       clientId: 'Input client id you get when you register the app',
// //       scope: 'launch/patient openid profile'
// //     })
// //     .then(client => {
// //       ReactDOM.render(<App client={client} />, rootElement);
// //     });
// // };


// }
smartLaunch();