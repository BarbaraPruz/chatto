# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable,
         :jwt_authenticatable,
         jwt_revocation_strategy: JWTBlacklist

  has_many :rooms
  has_many :messages

  validates :screen_name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, on: :create

  before_save { |user| user.email = user.email.downcase }
end
