class AddColumnToSheets < ActiveRecord::Migration
  def change
    add_column :sheets, :name, :string
    add_column :sheets, :tempo, :string
    add_column :sheets, :notes, :string
    add_column :sheets, :updated_at, :string
    add_column :sheets, :sheet_id, :string
    add_column :sheets, :timesiga, :string
    add_column :sheets, :timesigb, :string
  end
end
