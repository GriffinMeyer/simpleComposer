class AddTimesigToSheets < ActiveRecord::Migration
  def change
    add_column :sheets, :timesiga, :string
    add_column :sheets, :timesigb, :string
  end
end
