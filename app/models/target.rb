class Target < ActiveRecord::Base
  belongs_to :category
  belongs_to :user
  has_many :actions
  belongs_to :metadata
  
  
end
