class Metadata < ActiveRecord::Base
  validates_uniqueness_of :name
  self.table_name = "metadata"
  
  has_many :target
end
