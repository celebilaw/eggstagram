# e :egg: :egg: stagram

## Authors:
* Noah Gardner - noahgardner303@gmail.com
* Celebi Law - celebilaw@gmail.com
* Matthew Workman - wathmew@gmail.com 
* Joel Hernandez - hernandezfjoel890@gmail.com
* Marisa Duran - mgduran@g.ucla.edu
* Discussion 1D - Dennis van Ee

## Run Eggstagram!
### Initial Set Up
1. Run `git clone https://github.com/celebilaw/eggstagram.git` in the desired folder
2. Navigate into the folder `eggstagram/eggstagram` via the following command
- `cd eggstagram/eggstagram`
3. Run `npm install`
4. Run `npm install -g nodemon`
### Starting Backend
5. Navigate into the folder `eggstagram/eggstagram/backend` via the following command
* `cd backend`
6. Run `nodemon server`
### Starting Frontend
7. Create a new terminal window
8. Navigate into the folder `eggstagram/eggstagram`
* Navigate to the folder where the repository was cloned
* `cd eggstagram/eggstagram`
9. Run `npm start`
### Using the Website
10. Eggstagram will open in a new browser at http://localhost:3000
11. Start interacting with our website! (explain)
-----
#### Users must be logged in to:
* Post
* Like
* Comment
* Edit Your Posts
* Delete Your Posts 

*Your login will time out in 1 hour*

-----
#### Navigation and Feed
##### General Navigation
* Click "Eggstagram" (or the logo) in the top left of the website to return to the Home Page
* Click "Posts" in the top right to see the Post Feed
* Click "Make a Post!" in the top right to make your own post
* Click "Create an Account" in the top right to make your own account
* Click "Login" in the top right to sign in to your account
* Click "Logout" in the top right to sign out of your account  
##### Feed Navigation
* Clicking on a post in the feed will allow you to view the post itself (likes and comments)
  * From here, if logged in, you can submit your own comments and like a post
  * If you made the post, you can edit the description or delete it (you may have to scroll down to see the area to Edit)
* Click "Posts" (in the top right) to return to the feed
##### Feed Filtering
* Posts can be filtered by description, dining hall, or rating
* Typing in a description will open a dropdown of individual posts for you to select and consequently view
* Clicking the "X" in the search bar for descriptions will remove what you have typed if you decide to not search for a post
* Selecting a Dining Hall from the dropdown will change the feed to only show reviews pertaining to that Dining Hall
* Selecting "Show All" in the dropdown will remove the Dining Hall Filter you previously selected
* Selecting a Star Rating will change the feed to only show reviews of that Star Rating
* Selecting the same Star Rating you previously selected will undo the Star Rating Filter (ex: clicking the 4th star after filtering to 4 Star Ratings)
-----

### Closing the Website
14. In the `nodemon server` terminal window, input the command `Ctrl - C` to shut down the backend 
15. In the `npm start` terminal window, input the command `Ctrl - C` and `Y` to shut down the frontend
