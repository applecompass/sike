class ActionsController < ApplicationController
  def index 
    @user = User.find(session[:user_id])
    @target = @user.targets.find(params[:target_id])
    
    @actions = @target.actions.all
    
  end
end
