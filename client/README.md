----------------July 8, 2019-------------------------------------------------------
Left the project without any routing done, only concentrated on adding the footer. 

-Next, need to work on a modal that opens when clicking on a certain date. 

the login logic can go in the /calendar component, if no token, send back to login....
----------------July 28, 2019-------------------------------------------------------
began working on Modal2 branch, left the modal visible and is currently covering all
the calendar component. 

-Next, need to work on creating slider effect to transition between form sheets...
-also, creating the input form for each meal, with save and close/calcel buttons
-the form will then send the info through Redux to be saved in the DB(an array of objs at first)
------------------Aug 4th ---------------------------------------------------------
modal now works (on/off), added toggle_modal() function to reducers with cancel button working

-next, create a form to fill out, some fields will be the same for all types of meals, 
some fields will be visible depending on the mealType

-store field values in DB
------------------Aug 11th------------------------------------------
nearly completed the modal/todo-app style of adding items the user ate to the list....
the app does add items to the list and displays them in a list below

- need to seperate the state for each individual month and need to begin adding to the DB

----------------Sept 1st ----------------------------------------------------
modal2 branch still needs : 

- Modal save button to work, once saved, Cancel buttom must switch to "Exit" txt. 