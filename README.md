# chatto
Just having fun here!  Chatto is a simple chat app.

Implementation conists of a Rails backend and React frontend.

In the master branch, chat messages are updated through polling logic.  In the WebSockets
branch, the polling is replaced with websockets using Active Cable.  Note that the WebSockets branch in not deployed to Heroku (requires moving to wss and because no paid
dynos are used, it would be additional cost).

# Installation Instructions
* Fork and clone this GIT repo. 
* For running on localhost, copy Procfile-localhost to Procfile.
* Set up backend by running bundle install, rake db:migrate and rake db:seed
* Set up frontend by going to client folder and running npm install

# Running chatto
* rake start

Test user logins (all passwords are 'test')
lou@domain.com
bud@domain.com


# Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/'BarbaraPruz'/chatto. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

# License
Open source under the terms of the MIT License.

# Code of Conduct
Everyone interacting in the ike project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct.


