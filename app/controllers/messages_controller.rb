class MessagesController < ApplicationController
    before_action :authenticate_user!
    
    def create
        puts "Message create params #{params}"
        message = Message.new(message_params)
        room = room_id.find(message_params[:room_id])
        if message.save
          serialized_data = ActiveModelSerializers::Adapter::Json.new(
            MessageSerializer.new(message)
          ).serializable_hash
          MessagesChannel.broadcast_to conversation, serialized_data
          head :ok
        end        
    end        

    private
        
    def message_params
        params.require(:message).permit(:content, :room_id, :user_id)
    end
end