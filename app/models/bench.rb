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

class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, :num_seats, presence: true

  def self.in_bounds(bounds)
    puts params
    eastbound = bounds["northEast"]["lat"]
    westbound = bounds["southWest"]["lat"]
    northbound = bounds["northEast"]["lng"]
    southbound = bounds["southWest"]["lng"]
    puts eastbound
    puts westbound
  end
end
