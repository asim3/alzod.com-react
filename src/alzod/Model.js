export default function(url) {
  return new Promise(function(resolver, reject, notify) {
    console.log(`Model url: ${url}`)
    
    resolver({type: url})

  });
};