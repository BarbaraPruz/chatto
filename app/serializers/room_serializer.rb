# frozen_string_literal: true

# Room object serialization
class RoomSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :messages
end
