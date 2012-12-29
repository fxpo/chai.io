class Project < ActiveRecord::Base
  belongs_to :user
  has_many :reports
  
  attr_accessible :description, :name, :user_id
  
  validates_presence_of :name, :user_id
  
end