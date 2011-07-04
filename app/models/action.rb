class Action < ActiveRecord::Base
  validates_presence_of :target_id, :metadata_id, :user_id
  belongs_to :target
  belongs_to :metadata
end
