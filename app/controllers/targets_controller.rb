class TargetsController < ApplicationController
  
  def index 
    @user = User.find(session[:user_id])
    @targets = @user.target.all
    
  end
  
  def new
    @target = Target.new()
    
  end
  
  def create
    @target = Target.new(params[:target])
    @target.category = Category.find_by_name("running")
    @target.metadata = Metadata.find_by_name("hour")
    @target.user_id = session[:user_id]
    @target.status = "active"
    @last = Target.order("id desc").where("user_id = ?", session[:user_id]).first
    
    if(@last != nil && @last.sequence_no != nil)
      @target.sequence_no = @last.sequence_no + 1
    else
      @target.sequence_no = 1
    end
    
    if @target.save
      redirect_to targets_url
    else
      render :action => :new
    end
    
  end
  
  def destroy
    @target = Target.find(params[:id])
    @target.destroy

    redirect_to targets_url
  end
  
end
