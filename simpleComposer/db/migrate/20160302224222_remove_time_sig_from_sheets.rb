class RemoveTimeSigFromSheets < ActiveRecord::Migration
  def change
    remove_column :sheets, :timesig, :string
  end
end
