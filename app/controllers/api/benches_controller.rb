class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
    render :index
  end

  def create
  end

  def benches_params
  end
end
