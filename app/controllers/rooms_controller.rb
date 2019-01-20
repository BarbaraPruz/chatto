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

    private

end