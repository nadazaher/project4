class AddColumnsToComments < ActiveRecord::Migration[5.2]
  def change

    add_column :comments, :content, :string
    add_column :comments, :event_service_id, :integer

  end
end
