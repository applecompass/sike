class Target < ActiveRecord::Base
  belongs_to :category
  belongs_to :metadata
  belongs_to :user
  
  
end
