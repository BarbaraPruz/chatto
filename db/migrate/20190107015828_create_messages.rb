# frozen_string_literal: true

# Messages - the heart of chatting
class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.text :content
      t.integer :room_id
      t.integer :user_id
      t.timestamps
    end
  end
end
