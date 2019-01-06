class SessionsController < ApplicationController

    def create
        redirect_to user_path(@current_user.id) if logged_in?
        @user = User.find_by(email: params[:email].downcase)
        if !@user
            flash[:welcome_alert] = "User Email not found."
            @user = User.new(email: params[:email])   # so user can see whath they entered    
            render :welcome
        elsif @user.authenticate(params[:password])
            session[:user_id] = @user.id
            redirect_to user_path(@user)
        else
            flash[:welcome_alert] ="Password incorrect."
            render :welcome
        end
    end

    def destroy
        session.delete :user_id
        redirect_to welcome_path
    end

end