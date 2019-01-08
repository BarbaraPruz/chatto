class MessagesController < ApplicationController
    before_action :require_logged_in

    def create
        puts "New Message #{params}"
        # verify params id matches current user
        # if save message ok, go to show room?
        # else show error
    end        

    private

end