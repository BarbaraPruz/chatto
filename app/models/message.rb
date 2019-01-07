class Message < ApplicationRecord
    validates :content, presence: true
    validates :room_id, presence: true
    validates :user_id, presence: true

    belongs_to :room
    belongs_to :user    
end
