const admin = require('firebase-admin');
var serviceAccount = require("../caps/firestoreKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "myFiestoreDB" //CHANGE THIS TO YOUR DB URL
});

const db = admin.firestore();


function editData(){

	db.collection("myCollection").doc("myDocument").collection("mySubcollection")
		.get()
	    .then(function(querySnapshot) {
	        querySnapshot.forEach(function(doc) {
	            // doc.data() is never undefined for query doc snapshots
	            console.log(doc.id, " => ", doc.data());
				// Old info
				var title = doc.id;
	            var oldData = doc.data();
				console.log("New title:");
				
				// Create new ID for each doc, in this case just changes the name to have only lower case letters.
	            let newTitle = title.toLowerCase();
	            console.log(newTitle);
	            console.log(oldData);
				
				// Create new document with new ID
				db.collection("myCollection").doc("myDocment").collection("mySubcollection").doc(newTitle).set(oldData).then(()=> {
	            	console.log("Created ", newTitle)
					
					// Delete old document with old document ID
					db.collection("myCollection").doc("myDocment").collection("mySubcollection").doc(title).delete().then(()=> {
	            		console.log("Deleted ", title);
	            	})
	            	.catch( function(error) {
							    console.error("Error removing document: ", error);            		
	            	})
	            })
	            .catch( function(error) {
							  console.error("Error adding document: ", error);            	
	            })

	        });
	    })
	    .catch(function(error) {
	        console.log("Error getting documents: ", error);
	    });

}

editData();