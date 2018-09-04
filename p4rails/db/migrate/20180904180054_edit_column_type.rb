class EditColumnType < ActiveRecord::Migration[5.2]
  def change
    add_column :event_services, :type_of_service, :string

  end
end
