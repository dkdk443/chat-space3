class Api::MessagesController < ApplicationController
  def index
    @messeges = Message.where('created_at > ?', params[:created_at]).first
    respond_to do |format|
      format.html
      format.json
    end
  end
end


