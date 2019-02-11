class MessagesController < ApplicationController
    before_action :authenticate_user!
    
    def create
        puts "Message create params #{params}"
        # validate user matches current user?
        @message = Message.create(message_params) 
        if !@message.valid?
            puts "Failure #{@message.errors.full_messages}"
        end
        # if invalid show message?
      ##  puts "Error! #{message.errors.full_messages}" if !message.valid?
        render json: @message, status: 200
    end        

    private
        
    def message_params
        params.require(:message).permit(:content, :room_id, :user_id)
    end
end