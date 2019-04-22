# README
# DB設計
## usersテーブル
|Columun|Type|Options|
|-------|----|-------|
|name|string|null:false unique:true|
|e-mail|string|null:false|
|password|string|null:false|
### アソシエーション
has_many groups, through: :user_groups
has_many messages
has_many user_groups


## groupsテーブル
|Columun|Type|Options|
|-------|----|-------|
|name|string||
### アソシエーション
has_many users, through: :user_groups
has_many messages
has_many user_groups


## user_groupsテーブル
|Columun|Type|Options|
|-------|----|-------|
|user_id|references| foreign_key: true|
|group_id|references| foreign_key: true|
### アソシエーション
belongs_to group
belongs_to user



## mesagesテーブル
|Columun|Type|Options|
|-------|----|-------|
|message|text||
|image|text||
|user_id|references|null:false, foreign_key: true|
|group_id|references|null:false, foreign_key: true|
### アソシエーション
belongs_to user
belongs_to group

