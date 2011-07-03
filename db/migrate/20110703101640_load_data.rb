class LoadData < ActiveRecord::Migration
  def self.up
    metadataNew = Metadata.find_by_name("hour")
    cateNew = Category.find_by_name("running")
    
    if metadataNew == nil
      metadataNew = Metadata.new
      metadataNew.name = "hour"
      metadataNew.data_type = 1
      metadataNew.save
    end
      
    if cateNew == nil
      cateNew = Category.new
      cateNew.name = "running"
      cateNew.save
    end
    
  end

  def self.down
  end
end
