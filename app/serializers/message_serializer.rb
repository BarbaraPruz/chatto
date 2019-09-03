# frozen_string_literal: true

class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_name, :updated_time

  def user_name
    object.user.screen_name
  end

  def updated_time
    object.updated_at.strftime('%A, %b %e, at %l:%M %p')
  end
end
