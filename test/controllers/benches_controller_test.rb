require 'test_helper'

class BenchesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get create" do
    get :create
    assert_response :success
  end

  test "should get benches_params" do
    get :benches_params
    assert_response :success
  end

end
