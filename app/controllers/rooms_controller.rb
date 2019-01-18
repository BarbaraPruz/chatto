class RoomsController < ApplicationController
    before_action :authenticate_user!

    def index
        @rooms=Room.all
        render json: @rooms, status: 200 
    end 
       
    def show
        @room=Room.find_by(:id => params[:id])
        @new_message = Message.new(:user_id => current_user.id, :room_id => @room.id)
    end        

    private

end