class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_name

  def user_name
    puts "Message Serializer object #{object}"
    object.user.screen_name
  end
   
end
