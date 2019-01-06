class UsersController < ApplicationController
    before_action :require_logged_in, except: [:new, :create]

    def show
        @rooms=Room.all
    end


    private

end
