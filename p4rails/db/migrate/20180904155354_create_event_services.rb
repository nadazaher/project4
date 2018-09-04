class CreateEventServices < ActiveRecord::Migration[5.2]
  def change
    create_table :event_services do |t|

      t.timestamps
    end
  end
end
