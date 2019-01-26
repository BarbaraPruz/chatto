class RoomSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :messages
end
