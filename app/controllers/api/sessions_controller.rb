class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      log_in(@user)
      render :show
    else
      render json: {base: ['invalid credentials']}, status: 401
    end
  end

  def destroy
    if current_user
      log_out
      render json: {}
    else
      render json: {base: ['no user to log out']}, status: 404
    end
  end
end
