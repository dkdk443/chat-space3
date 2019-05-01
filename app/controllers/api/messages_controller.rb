class Api::MessagesController < ApplicationController
  def index
    @messege = Message.where('created_at > ?', params[:message][:created_at]).first
    respond_to do |format|
      format.html
      format.json
  end
end