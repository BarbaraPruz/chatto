class UsersController < ApplicationController
    before_action :require_logged_in, except: [:new, :create]

    def show
        
    end


    private

end
