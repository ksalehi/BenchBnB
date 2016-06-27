class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
    render :index
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      flash.now[:notices] = ["Bench successfully created!"]
      render :show
    else
      flash.now[:notices] = @bench.errors.full_messages
    end
  end

  def bench_params
    params.require(:bench).permit(:description, :num_seats, :lat, :lng)
  end
end
