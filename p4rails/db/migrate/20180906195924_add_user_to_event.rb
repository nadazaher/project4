class AddUserToEvent < ActiveRecord::Migration[5.2]
  def change
    add_column :event_services, :user_id, :integer
  end
  
end
