var oc = oc || {};
(oc.components = oc.components || {}), (oc.components[
  '1c141eff044d83160448ef227d62cafec2a6e7eb'
] = function(e) {
  var n,
    o = [],
    c = e || {};
  return function(e) {
    o.push('<div>Hello ' + jade.escape(null == (n = e) ? '' : n) + '</div>');
  }.call(
    this,
    'name' in c ? c.name : 'undefined' != typeof name ? name : void 0
  ), o.join('');
});
