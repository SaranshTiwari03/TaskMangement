## Installation Guide

### Requirements
- [Nodejs](https://nodejs.org/en/download)
- [Mongodb](https://www.mongodb.com/docs/manual/administration/install-community/)

Both should be installed and make sure mongodb is running.

Now install the dependencies
# on cmd promt/powershell 
cd backend
npm install

cd frontend
npm install

We are almost done, Now just start the development server.

For Frontend.
# on cmd promt/powershell 
cd frontend
npm start

For Backend.

Open another terminal in folder, Also make sure mongodb is running in background.
# on cmd promt/powershell 
cd backend
nodemon index.js
or
npx nodemon index.js

Done! Now open localhost:3000 in your browser.

# After 1st registration 
go to MongoDB compass and change:
role="admin"
status=1

# Now Login

From next user registeration onwards
# Login Admin and verify or do the same as above.


Your app should be working.

# For any further doubts
Watch this : https://www.loom.com/share/9db98ee82b3a4954b2d7ad9413021d06?sid=3c95f607-6412-4036-9df3-464dcbe6c65e


