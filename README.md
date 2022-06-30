# MariPOS (Experimental)

### Localhost based web application point of sale software


#### Installation
______

To install de depencencies open a terminal in the \backend folder and run
>- `python -m venv venv` 

Then start the virtual environment by running the command
>- `venv\Scripts\activate.bat` 

And then
>- `pip install -r requirements.txt` 

Update `pip` if needed.
Exit the virtual environment by running
>- `deactivate`

Open a terminal in the \frontend\maripos folder and run
>- `npm install`
  
*NOTE:* To run this command `Node.js` and `React` must be already installed. 
Vist ([https://nodejs.org/es/](https://nodejs.org/es/)) to install `Node.js` and then run the command
>- `npm install -g create-react-app`
_____

MongoDB is used as database, for this proyect to work mongodb must be running or be insatalled as a service in your system
To setup the database move to the \backend folder and start the python virtual environment 
>- `venv\Scripts\activate.bat` 

Then run
>- `python rest\database\dbSetup.py`
_____

To start the proyect open a terminal in the \backend folder and run
>- `venv\Scripts\activate.bat` 

Then move to the \rest folder and run
>- `python app.py`

This will launch the flask server
Open another terminal in the \frontend\maripos folder and run
>- `npm start`

This will launch the react server and open a tab in the internet browser