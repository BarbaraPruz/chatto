class MessagesController < ApplicationController
    before_action :require_logged_in

    def create
        # validate user matches current user?
        message = Message.create(message_params) 
        # if invalid show message?
      ##  puts "Error! #{message.errors.full_messages}" if !message.valid?
        redirect_to room_path(:id => params[:message][:room_id])
    end        

    private
        
    def message_params
        params.require(:message).permit(:content, :room_id, :user_id)
    end
end