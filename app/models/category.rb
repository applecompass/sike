class Category < ActiveRecord::Base
  has_many :targets
  
  def self.loadRunning()
    category = Category.find_by_
  end
end
