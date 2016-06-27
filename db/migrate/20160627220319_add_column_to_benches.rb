class AddColumnToBenches < ActiveRecord::Migration
  def change
    add_column :benches, :num_seats, :integer, default: 0
  end
end
