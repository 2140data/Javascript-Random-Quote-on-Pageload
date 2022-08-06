//Javascript document

//Store a group of quotes in a variable called 'i'
var i=new Array();

//Edit each quote text below. Add/Delete additional quotes as needed.
i[0]='0 - This is where you put your quote text.';
i[1]='1 - This is where you put your quote text.';
i[2]='2 - This is where you put your quote text.';
i[3]='3 - This is where you put your quote text.';
i[4]='4 - This is where you put your quote text.';
i[5]='5 - This is where you put your quote text.';
i[6]='6 - This is where you put your quote text.';
i[7]='7 - This is where you put your quote text.';
i[8]='8 - This is where you put your quote text.';
i[9]='9 - This is where you put your quote text.';

//Display a random quote from the group
var x=Math.floor(Math.random()*(i.length));
document.write(i[x]);
