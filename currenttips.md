## Basics
ndenting

* For ease of locating items in your code and for Developers that may follow you be sure to indent your code

Tip #2
Commenting

* Commenting is like adding notes that only the Developers will see

* Make sure that the comments added are relevant to what and where you are placing the comment

* To comment out in an HTML doc you can typically highlight the line and click ctrl + /

Tip #3
Git Commands #1

* git clone <repository clone link> = Will create a clone directory on your local machine

* git status = A way to see what files are being tracked / have changed since last commit

* git pull = Reaches out to Github to check if local copy is up to date with github and not behind

* git push origin <branch name> = This will upload the local repository changes to github into the branch specified
Tip #4
CLI (Terminal) Commands #1

* ls = used to show the contents of the folder you are in

* pwd = shows you the current folder path that you are in

* cd <directory name> = this will basically enter the folder

* cd .. = this command will take you back up 1 folder
Tip #5
Git Commands #2

* git add <file name> = this will add the named file to the next commit

* git commit -m <message> = This will add a message to your commit (message must be in quotes)

* git checkout -b <branch name> = this allows you to create a branch almost like a virtual copy

Tip #6
CLI (Terminal) Commands #2

* mkdir <folder name> = this will create a new folder in your current location

* touch <file name> = this will create the desired file in the current location

* rmdir <folder name> = this will perminantly delete the named folder CAN NOT BE UNDONE!

* code <file name> (or code .) = this will open the file or just the editor of choice (this sometimes needs setup)
Tip #7
Good Editors

* VSCode = Has a lot of extentions you can add to help you code

* Sublime = Not as fancy but still a good one

* Notepad ++ = Just a basic editor but can be usefull

## HTML 
Tip #1
Main Required Tags

* <!DOCTYPE html> = This should be at the beginning of all documents

* <html> </html> = Will follow the declairation of Doctype

* <head> </head> = This is the 1st section inside the html tags and contains unseen information, meta data, and styling instructions

* <body> </body> = This follows the head section and contains the web page content, the meat and potatoes of the site
Tip #2
Self Closing Tags

* <DOCTYPE html>

* <br>

* <img />

Tip #3
Semantic Tags = Tags with Meaning (just a few)

* <nav></nav> = used for your navigation

* <header></header> = used to seperate the heading of the body from the content

* <footer></footer> = used to seperate the footer from the content with in the body

## CSS
Tip #1
Mixin's

* Be sure there is no space between the name and () for example: .flexrow();

* These are used as a short hand way of implementing multiple properties.

* Used in LESS

* Typically used when a specific set of style properties are used over and over through out the document
Tip #2
Cascading Style Sheet

* By Cascading we mean that the styles are applied in the order of top => down.

* What this means is that if you have 2 entries for the nav styles the 2nd one will be used.

Tip #3
Specificity

* Each Element/Tag typically comes with it's own styling rules and will be used 1st

* Class entries override the Element styling

* ID entries are more important and override the class entries regardless of location in the document

Tip #4
Naming

Be sure to name your classes or id in a way that helps identify the element well. CSS documents can get long

