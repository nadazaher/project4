class RemoveColumnType < ActiveRecord::Migration[5.2]
  def change
    remove_column :event_services, :type, :string

  end
end
