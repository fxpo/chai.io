class Project < ActiveRecord::Base
  belongs_to :user
  has_many :reports, :dependent => :destroy
  
  attr_accessible :description, :name, :user_id

  validates_presence_of :name, :user_id
  validates_uniqueness_of :name, :scope => [:user_id]

  validates :name, :length => { :minimum => 2 }

  after_initialize :init

  def init
  	self.id ||= 0
  	self.name ||= "Default"
  end

end
