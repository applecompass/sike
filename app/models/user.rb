class User < ActiveRecord::Base
  validates_presence_of :password, :email
  validates_uniqueness_of :email
  has_many :target
  
  def self.authenticate(email, password)
    user = self.find_by_email(email)
    if user
      if user.password != password
        user = nil
      end
    end
    user
  end
  
end
