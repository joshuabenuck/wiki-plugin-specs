(function() {

function ago (msec) {
  let secs,mins,hrs,days,weeks,months,years
  secs = msec/1000
  if ((mins = secs/60) < 2) return `${Math.round(secs)} seconds`
  if ((hrs = mins/60) < 2) return `${Math.round(mins)} minutes`
  if ((days = hrs/24) < 2) return `${Math.round(hrs)} hours`
  if ((weeks = days/7) < 2) return `${Math.round(days)} days`
  if ((months = days/31) < 2) return `${Math.round(weeks)} weeks`
  if ((years = days/365) < 2) return `${Math.round(months)} months`
  return `${Math.round(years)} years`
}

/*
const expand = (text) => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*(.+?)\/g, '<i>$1</i>')
};

const absolute = (url) => {
  // https://github.com/bitinn/node-fetch/issues/481
  return url.replace(/^(https?:)\/([^\/])/,`$1//${location.host}/$2`)
}

const parse = (text) => {
  var schedule = {sites:{}, chunk:'hour', interval:5000, keep:24}
  let output = text.split(/\r?\n/).map (line => {
    var m
    if (m = line.match(/^HOUR (\d+)$/)) {
      schedule.chunk = 'hour'
      schedule.interval = 1000*60*60 / m[1]
    } else if (m = line.match(/^DAY (\d+)$/)) {
      schedule.chunk = 'day'
      schedule.interval = 1000*60*60*24 / m[1]
    } else if (m = line.match(/^MONTH (\d+)$/)) {
      schedule.chunk = 'month'
      schedule.interval = 1000*60*60*24*30 / m[1]
    } else if (m = line.match(/^KEEP (\d+)$/)) {
      schedule.keep = m[1]*1
    } else if (m = line.match(/^SENSOR (\w+) (https?:\S+)$/)) {
      schedule.sites[m[1]] = absolute(m[2])
      line = `SENSOR <a href="${absolute(m[2])}" target=_blank>${m[1]} <img src="/images/external-link-ltr-icon.png"></a>`
    } else {
      line = `<font color=gray>${expand(line)}</font>`
    }
    return line
  }).join('<br>')
  return {output, schedule}
}
*/

// If there are .server-source's in the DOM, this will only be calleed
// once they have been initialized.
function emit($item, item) {
  $item.addClass('output-item')
  $item.dblclick(() => {
    return wiki.textEditor($item, item);
  });
};

function parse(text) {
  let lines = text.split('\n')
  if (lines.length > 0) {
    return lines[0]
  }
  ''
}

function bind($item, item) {
  console.log('spec', item)
  $item.append(parse(item.text))
}

if (typeof window !== "undefined" && window !== null) {
  window.plugins.specs = {emit, bind};
}
}).call(this);
