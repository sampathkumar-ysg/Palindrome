Instruction to run build and run the Palimdrome Application

1) Clone the complete repository
2) Go to ~\Palindrome\src\Palindrome.Web folder in common prompt
3) run below NPM command to install all dependencies
	>npm install
4) Once npm install is completed, run the below command to host the UI
	>npm start
	You will see browser launching with empty form.
5) Next go to ~\Palindrome\src folder in explorer
6) Open Palindrome.Api.sln in Visual Studio 2017
7) Build the Solution
8) First Set the PalindromeDB project as start up project and run (f5 or crtl+f5)
9) Make sure the database is created with name Palindrome / PalindromeDB or something similar (in SQL Server Object Explorer)
10)Check if the tables and stored procs have been created (in SQL Server Object Explorer)
11)Make sure the database name is correct in the connection string Palindrome\src\Palindrome.Api\appsettings.json and appsettings.Development.json
11)Next Set the Palindrome.Web project as start up project and run (f5 or crtl+f5)
12)Api will be hosted now
13)Got to the Palimdrome form in the UI start typing the text and click on save
14)If the entered text is a palindrome then it gets added to the database and gets listed in the below grid as well.
	