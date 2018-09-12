class AddImagesToServices < ActiveRecord::Migration[5.2]
  def change
    add_column :event_services, :image, :string
  end
end
