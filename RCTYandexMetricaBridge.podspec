require 'json'
package = JSON.parse(File.read('package.json'))

Pod::Spec.new do |s|
  s.name = "RCTYandexMetricaBridge"
  s.version = package['version']
  s.summary = package['description']
  s.license = package['license']
  s.authors = package['author']
  s.homepage = package['homepage']
  s.platform = :ios, "9.0"
  s.ios.deployment_target = '9.0'
  s.tvos.deployment_target = '10.0'
  s.source = { :git => package["repository"]["url"].gsub(/(http.*)/).first, :branch => "master" }
  s.source_files = "ios/**/*.{h,m}"
  s.dependency 'React'
end
