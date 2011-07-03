class Category < ActiveRecord::Base
  validates_uniqueness_of :name
  has_many :targets
  
  def self.loadRunning()
    category = Category.find_by_
  end
end
