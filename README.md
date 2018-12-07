# Firestore DocID Editor

This script can be used to edit all the document IDs of a collection of documents in Firestore, since you are unable to edit the doc IDs as of December 2018.

In order to use it, you need a Firebase key downloaded from your Firebase project, and name it as firestoreKey.json and insert your Firestore's URL to the script.js file (Line 6). You can specify your collection, document, and subcollection that you want to modify, just be sure you end in a .collection() in order to get all the documents. 

All dependiencies are included, but you need to have Node and npm installed, as well as a firebase account and firebase tools installed.

I use it mostly to change letter casing of document IDs, but be sure to share any other useful uses for it!
