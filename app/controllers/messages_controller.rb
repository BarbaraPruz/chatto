# frozen_string_literal: true

# Contoller for creating messages
class MessagesController < ApplicationController
  before_action :authenticate_user!

  def create
    puts "Message create params #{params}"
    # validate user matches current user?
    @message = Message.create(message_params)
    puts "Failure #{@message.errors.full_messages}" unless @message.valid?
    # if invalid show message?
    ##  puts "Error! #{message.errors.full_messages}" if !message.valid?
    render json: @message, status: 200
  end

  private

  def message_params
    params.require(:message).permit(:content, :room_id, :user_id)
  end
end
