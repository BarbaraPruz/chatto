# frozen_string_literal: true

# User contoller
class UsersController < ApplicationController
  before_action :require_logged_in, except: %i[new create]

  def show
    @rooms = Room.all
  end

  private
end
