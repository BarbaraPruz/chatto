# frozen_string_literal: true

class Room < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :messages
end
