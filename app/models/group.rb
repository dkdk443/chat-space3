class Group < ApplicationRecord
  has_many :user_groups
  has_many :users, through: :user_groups
  has_many :messages

  def show_last_message
    if (last_message = messages.last).present?
      last_message.message? ? last_message.message : '画像が投稿されています'
    else
      'まだメッセージはありません。'
    end
  end
end
