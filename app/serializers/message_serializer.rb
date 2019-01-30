class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_name, :updated_time

  def user_name
    puts "Message Serializer object #{object}"
    object.user.screen_name
  end
   
  def updated_time
    object.updated_at.strftime("%A, %b %e, at %l:%M %p")
  end

end
