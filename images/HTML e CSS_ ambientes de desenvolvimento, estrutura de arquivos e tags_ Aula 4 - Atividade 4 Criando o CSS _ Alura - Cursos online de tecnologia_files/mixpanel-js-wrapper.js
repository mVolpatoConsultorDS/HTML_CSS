(function(l,p){if(!p.__SV){var c,u,_,t;window.mixpanel=p,p._i=[],p.init=function(r,a,e){function o(s,i){var g=i.split(".");g.length==2&&(s=s[g[0]],i=g[1]),s[i]=function(){s.push([i].concat(Array.prototype.slice.call(arguments,0)))}}var n=p;for(typeof e<"u"?n=p[e]=[]:e="mixpanel",n.people=n.people||[],n.toString=function(s){var i="mixpanel";return e!=="mixpanel"&&(i+="."+e),s||(i+=" (stub)"),i},n.people.toString=function(){return n.toString(1)+".people (stub)"},_="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" "),t=0;t<_.length;t++)o(n,_[t]);var f="set set_once union unset remove delete".split(" ");n.get_group=function(){function s(d){i[d]=function(){call2_args=arguments,call2=[d].concat(Array.prototype.slice.call(call2_args,0)),n.push([g,call2])}}for(var i={},g=["get_group"].concat(Array.prototype.slice.call(arguments,0)),m=0;m<f.length;m++)s(f[m]);return i},p._i.push([r,a,e])},p.__SV=1.2,c=l.createElement("script"),c.type="text/javascript",c.async=!0,c.src=typeof MIXPANEL_CUSTOM_LIB_URL<"u"?MIXPANEL_CUSTOM_LIB_URL:l.location.protocol==="file:"&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js",u=l.getElementsByTagName("script")[0],u.parentNode.insertBefore(c,u)}})(document,window.mixpanel||[]),function(l,p){if(!(!l.mixpanel||typeof l.mixpanel.init!="function")){var c=["add_group","alias","clear_opt_in_out_tracking","disable","identify","opt_in_tracking","opt_out_tracking","register","register_once","remove_group","reset","set_config","set_group","time_event","track","track_forms","track_links","track_pageview","track_with_groups","unregister","people.append","people.clear_charges","people.delete_user","people.increment","people.remove","people.set","people.set_once","people.track_charge","people.union","people.unset","group.remove","group.set","group.set_once","group.union","group.unset"],u=function(t,r,a){var e=r.split(".").pop();t.people[e].apply(t.people,a)},_=function(t,r,a){var e=r.split(".").pop(),o=a.shift();if(!(!Array.isArray(o)||o.length!==2)){var n=t.get_group.apply(t,o);n[e].apply(n,a)}};l[p]=l[p]||function(){var t=[].slice.call(arguments,0),r=t.shift(),a=null,e=r.match(/^([^.]+)\.(.+)$/);e&&e.length===3&&!/people|group/.test(e[1])&&(a=e[1],r=e[2]);var o=a?window.mixpanel[a]:window.mixpanel;if(o&&c.indexOf(r)!==-1)return/^people\./.test(r)?u(o,r,t):/^group\./.test(r)?_(o,r,t):o.push.apply(o,[[r].concat(t)])}}}(window,"_mixpanel");
