!function(t){t.fn.witchDataTable=function(e){function d(){var t="<thead><tr>",d=e.thead;for(key in d)t+='<th style="width:'+d[key]+'">'+key+"</th>";t+="</tr></thead>";var a=e.data;t+="<tbody>";for(key in a)t+="<tr><td>"+key+"</td><td>"+a[key]+"</td></tr>";t+="</tbody>",n.append(t)}var a={thead:{}},e=t.extend(a,e),n=this;d()}}(jQuery);