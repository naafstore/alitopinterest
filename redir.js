var jsonContent = {"akun" : [
  {
    "aff": "http://s.click.aliexpress.com/deep_link.htm?aff_short_key=_Dlzadij&dl_target_url=https://www.aliexpress.com/item/",
  },
  {
    "aff": "http://s.click.aliexpress.com/deep_link.htm?aff_short_key=_Dlzadij&dl_target_url=https://www.aliexpress.com/item/",
  }
]}

 var random = jsonContent.akun[Math.floor(Math.random() * jsonContent.akun.length)];
// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

var first = getUrlVars()["prod"];
if(first>0){
window.location.href = random.aff+first+'.html';} else {window.location.href = '//';}
