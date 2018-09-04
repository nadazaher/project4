class AddColumnsToEventService < ActiveRecord::Migration[5.2]
  def change

    add_column :event_services, :type_of_service, :string
      add_column :event_services, :host, :string
      add_column :event_services, :contact_info, :string
      add_column :event_services, :description, :string
      add_column :event_services, :link, :string
      add_column :event_services, :avg_price, :string

  end
end
