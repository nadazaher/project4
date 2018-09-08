class EditColumnsInEventservices < ActiveRecord::Migration[5.2]
  def change
    remove_column :event_services, :contact_info
    add_column :event_services, :email, :string
    add_column :event_services, :number, :integer


  end
end
