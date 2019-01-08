class RoomsController < ApplicationController
    before_action :require_logged_in

    def show
        @room=Room.find_by(:id => params[:id])
        @new_message = Message.new(:user_id => current_user.id, :room_id => @room.id)
    end        

    private

end