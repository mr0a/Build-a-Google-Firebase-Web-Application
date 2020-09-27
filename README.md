# Build-a-Google-Firebase-Web-Application

### Setting Up Firebase:
- Create account in firebase.google.com and create a realtime database.
- You will get a script to setup firebase in your website.

- Testing our firebase setup:
  - Create a basic webpage in html for testing our setup
```javascript
<html>
<head><title>Firebase Testing</title></head>
<body>
<h1>Test the firebase by creating some a=nodes and adding entries</h1>
</body>
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.15.4/firebase-app.js"></script>
<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.15.4/firebase-analytics.js"></script>
<!-- STEP 2: ADD the database LIBRARY -->
<script src="https://www.gstatic.com/firebasejs/7.15.4/firebase-database.js"></script>
<script type = "text/javascript" src = "test_pad.js"></script>
</html>
```
  - > test_pad.js
  ```javascript
  var firebaseConfig = {
    apiKey: "AIzaSyC-o2qpD_cDmJMwGO-zVM-iYjV-pOGtKks",
    authDomain: "my-demo-80558.firebaseapp.com",
    databaseURL: "https://my-demo-80558.firebaseio.com",
    projectId: "my-demo-80558",
    storageBucket: "my-demo-80558.appspot.com",
    messagingSenderId: "967106302588",
    appId: "1:967106302588:web:c28fda8fe070e3ed012ff9",
    measurementId: "G-7RS3C9J1DH"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const rootRef = firebase.database().ref("issues/"); // Create a root

rootRef.push ({
  description: "Logo does not show up on screen 3",
  resolved: "yes",
  severity: "minor"
});

rootRef.push ({
  description: "Screen flashes on save",
  resolved: "no",
  severity: "moderate"
});
  ```
  - Now run the testing webpage in your browser and check the firebase to see for the root and nodes added in the node.
  - Now we have connected the firebase with our webpage successfully.
  
- Retrieve data from firebase:
```javascript
rootRef.on("value",
  (snapshot) => {
    const listTableBody = document.getElementById("list-table-body"); // Select a table with id for populating the data 
    // clear all the table rows first
    listTableBody.textContent = "";

    snapshot.forEach((child) => {
      issue = child.val(); //child.key() to get the key of the elements
      //console.log(issue);
      var row = document.createElement("tr");
      row.innerHTML = "<td>" + issue.severity + "</td><td>" + encodeHtml(issue.description) + "</td><td>" + issue.resolved + "</td>";
      listTableBody.append(row);
    });

  },
  (error) => {
    console.log("Error: " + error.code);
  }
);
```
- Insert data:
```javascript
rootRef.push ({
    description: "value",
    resolved: "value",
    severity: "value"
  });
 ```
 - Updating data:
 ```javascript
var recordRef = firebase.database().ref("issues/key-of-record");
recordRef.update ({
  "resolved": "yes"
});
```
- Deleting Record:
```javascript
  var recordRef = firebase.database().ref("issues/" + issueKey);
  recordRef.remove()
     .catch(function(error) {
       alert("Delete failed: " + error.message)
     });
}
```
