class LoadData < ActiveRecord::Migration
  def self.up
    metadataNew = Metadata.find_by_name("hour")
    cateNew = Category.find_by_nam("running")
    
    if metadataNew == nil
      metadataNew = Metadata.new()
      metadataNew.name = "hour"
      metadataNew.data_type = 1
      metadataNew.save
      
    if cateNew == nil
      cateNew.name = "running"
      cateNew.save
  end

  def self.down
  end
end
