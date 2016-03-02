class CreateSheets < ActiveRecord::Migration
  def change
    add_column :sheets, :sheet_id, :string
    end
  end
end
