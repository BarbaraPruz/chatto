class User < ApplicationRecord
    has_secure_password
  
    validates :screen_name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, on: :create

    before_save { |user| user.email = user.email.downcase }    
end
