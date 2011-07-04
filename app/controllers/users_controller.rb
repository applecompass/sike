class UsersController < ApplicationController
  
  def new
    @user = User.new()
    
  end
  
  def create
    @user = User.new(params[:user])
    
    if @user.save
      session[:user_id] = @user.id
      redirect_to new_target_path
    else
      render :action => :new
    end
    
  end
  
  def login
    session[:user_Id] = nil
    if request.post?
      user = User.authenticate(params[:email], params[:password])
      if user
        session[:user_id] = user.id
        
        if user.target.count == 0
          redirect_to new_target_path
        else
          redirect_to new_event_path
        end
      end
    end
  end
end
