class ChangeIntegerToString < ActiveRecord::Migration[5.2]
  def change
    remove_column :event_services, :number, :integer
    add_column :event_services, :number, :string

  end
end
