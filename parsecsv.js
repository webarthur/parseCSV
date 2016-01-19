
if(!String.prototype.parseCSV)
  String.prototype.parseCSV = parseCSV;

function parseCSV(s, o) {

  this!=window
    && (o=s, s=this);

  var od = {
    'fSep': ',',
    // 'rSep': '\r\n',
    'rSep': '\n',
    'quot': '"',
    'head': true,
    'trim': false
  }
  if (o) {
    for (var i in od) {
      if (!o[i]) o[i] = od[i];
    }
  } else {
    o = od;
  }
  var a = [
    []
  ];
  for (var r = f = p = q = 0; p < s.length; p++) {
    h = r>0? a[0][f] : f;
    r>0 && !a[r][h] && (a[r][h]='');
    switch (c = s.charAt(p)) {
      case o.quot:
        if (q && s.charAt(p + 1) == o.quot) {
          a[r][h] += o.quot;
          ++p;
        } else {
          q ^= 1;
        }
        break;
      case o.fSep:
        if (!q) {
          if (o.trim) {
            a[r][h] = a[r][h].replace(/^\s\s*/, '').replace(/\s\s*$/, '');
          }
          f++;
          r==0 && (a[r][f] = '');
        } else {
          a[r][h] += c;
        }
        break;
      case o.rSep.charAt(0):
        if (!q && (!o.rSep.charAt(1) || (o.rSep.charAt(1) && o.rSep.charAt(1) == s.charAt(p + 1)))) {
          if (o.trim) {
            a[r][h] = a[r][h].replace(/^\s\s*/, '').replace(/\s\s*$/, '');
          }
          a[++r] = [];
          f = 0;
          // a[r][f = 0] = '';
          if (o.rSep.charAt(1)) {
            ++p;
          }
        } else {
          a[r][h] += c;
        }
        break;
      default:
        !a[r][h] && (a[r][h]='');
        a[r][h] += c;
    }
  }
  if (o.head) {
    a.shift()
  }
  if (a[a.length - 1].length < a[0].length || a[a.length - 1].length==0 ) {
    a.pop()
  }
  return a;
}
