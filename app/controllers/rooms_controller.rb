
class RoomsController < ApplicationController
    before_action :authenticate_user!

    def index
        @rooms=Room.all
        render json: @rooms, status: 200 
    end 
       
    def show
        @room=Room.find_by(:id => params[:id])
        render json: @room, status: 200
    end        

    def updates
        room=Room.find_by(:id => params[:id])
        @new_messages = room.messages.where("id > ?", params[:message_id])
        render json: @new_messages, status: 200
    end

    private

end