# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  num_seats   :integer          default(0)
#

require 'test_helper'

class BenchTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
