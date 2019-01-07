class RoomsController < ApplicationController
    before_action :require_logged_in

    def show
        @room=Room.find_by(:id => params[:id])
    end

    private

end