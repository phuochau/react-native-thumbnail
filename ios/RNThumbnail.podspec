
Pod::Spec.new do |s|
  s.name         = "RNThumbnail"
  s.version      = "1.0.0"
  s.summary      = "RNThumbnail"
  s.description  = <<-DESC
                  RNThumbnail
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.homepage     = "https://github.com/author/RNThumbnail"
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNThumbnail.git", :tag => "master" }
  s.source_files  = "RNThumbnail/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  
