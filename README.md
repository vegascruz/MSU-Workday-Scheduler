# Work Day Scheduler Starter Code

This is a simple calendar application that allows a user to save events for each hour of the day. It will run in the browser.

The parameters are within the normal work schedule, 9-5pm. If we need to adjust it, all it will take is adding an extra row in our index.html file

The program works with moment.js which is a cleaner way of using date time library. This is used on the top of the page for one of the headers, the date is changed for each day. Moment is also used to determine if events are "past", "present" or "future" for each row. Based on the time of day, our textarea's will change color. Gray if past, red if present and green if future. 

The save button includes an icon which I imported from https://fontawesome.com/ . All rights to them for the save icon. Same goes for our check icon used in our "localstorage" confirmation messages. 

When you hover the save icon, you'll notice it expands and resizes when hover is away. 

The save button stores the text area "event" descriptions in localstorage which is used on most browsers. It'll store that event in local storage, so if you exit the site... it will still be there. After the save button is clicked and info is saved, a confirmation message will pop up above the top row. This will go away if you click into another textbox. The top confirmation messages have a "hide" class which will change the display attribute to "hidden". We can change this by using "addclass" and "removeclass". 

 I added a new feature where you can wipe the localstorage and textarea text. It's a "Clear Storage" button at the bottom. After this, another confirmation message will pop up above the top row. 

 In the CSS file, you can see all the styling being used. For some of the features, Bootstrap is being used. Lastly, I made it so it adjusts for different screen sizes using @media queries. 

 Thanks and I hope you enjoy. 