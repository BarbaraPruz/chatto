class MessagesController < ApplicationController
    before_action :authenticate_user!
    
    def create
        puts "Message create params #{params}"
        message = Message.new(message_params)
        room = Room.find(message_params[:room_id])
        if message.save
            puts "Message saved"
          serialized_data = ActiveModelSerializers::Adapter::Json.new(
            MessageSerializer.new(message)
          ).serializable_hash
          MessagesChannel.broadcast_to room, serialized_data
          head :ok
        end 
        puts "Mesage not saved #{message.errors.full_messages}"      
    end        

    private
        
    def message_params
        params.require(:message).permit(:content, :room_id, :user_id)
    end
end