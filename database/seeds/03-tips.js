
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tips').del()
    .then(function () {
      // Inserts seed entries
      return knex('tips').insert([
        {guides_id: 1, name: "Indenting", num: "Tip #1", info01: "* For ease of locating items in your code and for Developers that may follow you be sure to indent your code"},
        {guides_id: 1, name: "Commenting", num: "Tip #2", info01: "* Commenting is like adding notes that only the Developers will see", info02: "* Make sure that the comments added are relevant to what and where you are placing the comment", info03: "* To comment out in an HTML doc you can typically highlight the line and click ctrl + /"},
        {guides_id: 1, name: "Git Commands #1", num: "Tip #3", info01: "* git clone <repository clone link> = Will create a clone directory on your local machine", info02: "* git status = A way to see what files are being tracked / have changed since last commit", info03: "* git pull = Reaches out to Github to check if local copy is up to date with github and not behind", info04: "* git push origin <branch name> = This will upload the local repository changes to github into the branch specified"},
        {guides_id: 1, name: "CLI (Terminal) Commands #1", num: "Tip #4", info01: "* ls = used to show the contents of the folder you are in", info02: "* pwd = shows you the current folder path that you are in", info03: "* cd <directory name> =  this will basically enter the folder", info04: "* cd .. = this command will take you back up 1 folder"},
        {guides_id: 1, name: "Git Commands #2", num: "Tip #5", info01: "* git add <file name> = this will add the named file to the next commit", info02: "* git commit -m <message> = This will add a message to your commit (message must be in quotes)", info03: "* git checkout -b <branch name> = this allows you to create a branch almost like a virtual copy"},
        {guides_id: 1, name: "CLI (Terminal) Commands #2", num: "Tip #6", info01: "* mkdir <folder name> = this will create a new folder in your current location", info02: "* touch <file name> = this will create the desired file in the current location", info03: "* rmdir <folder name> = this will permanently delete the named folder CAN NOT BE UNDONE!", info04: "* code <file name> (or code .) = this will open the file or just the editor of choice (this sometimes needs setup) "},
        {guides_id: 1, name: "Good Editors", num: "Tip #7", info01: "* VSCode = Has a lot of extensions you can add to help you code", info02: "* Sublime = Not as fancy but still a good one", info03: "* Notepad ++ = Just a basic editor but can be useful"},
        {guides_id: 2, name: "Main Required Tags", num: "Tip #1", info01: "* <!DOCTYPE html> = This should be at the beginning of all documents", info02: "* <html> </html> = Will follow the declaration of Doctype", info03: "* <head> </head> = This is the 1st section inside the html tags and contains unseen information, meta data, and styling instructions", info04: "* <body> </body> = This follows the head section and contains the web page content, the meat and potatoes of the site"},
        {guides_id: 2, name: "Self Closing Tags", num: "Tip #2", info01: "* <DOCTYPE html>", info02: "* <br>", info03: "* <img />"},
        {guides_id: 2, name: "Semantic Tags = Tags with Meaning (just a few)", num: "Tip #3", info01: "* <nav></nav> = used for your navigation", info02: "* <header></header> = used to separate the heading of the body from the content", info03: "* <footer></footer> = used to separate the footer from the content with in the body"},
        {guides_id: 3, name: "Mixin's", num: "Tip #1", info01: "* Be sure there is no space between the name and () for example: .flexrow();", info02: "* These are used as a short hand way of implementing multiple properties.", info03: "* Used in LESS", info04: "* Typically used when a specific set of style properties are used over and over through out the document"},
        {guides_id: 3, name: "Cascading Style Sheet", num: "Tip #2", info01: "* By Cascading we mean that the styles are applied in the order of top => down.", info02: "* What this means is that if you have 2 entries for the nav styles the 2nd one will be used."},
        {guides_id: 3, name: "Specificity", num: "Tip #3", info01: "* Each Element/Tag typically comes with it's own styling rules and will be used 1st", info02: "* Class entries override the Element styling", info03: "* ID entries are more important and override the class entries regardless of location in the document"},
        {guides_id: 3, name: "Naming", num: "Tip #4", info01: "Be sure to name your classes or id in a way that helps identify the element well. CSS documents can get long"},
        {guides_id: 4, name: "Coming Soon", num: "Tip Coming", info01: ""},
        {guides_id: 5, name: "Coming Soon", num: "Tip Coming", info01: ""},
        {guides_id: 6, name: "Coming Soon", num: "Tip Coming", info01: ""}
      ]);
    });
};
