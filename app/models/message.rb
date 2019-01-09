class Message < ApplicationRecord
    validates :content, presence: true
    validates :room, presence: true
    validates :user, presence: true

    belongs_to :room
    belongs_to :user    
end
