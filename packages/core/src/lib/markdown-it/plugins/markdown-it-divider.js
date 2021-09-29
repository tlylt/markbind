
const dividerPlugin = (markdown) => {
  function isSpace(code) {
    switch (code) {
      case 0x09:
      case 0x20:
        return true;
    }
    return false;
  }

  function hrEnhanced(state, startLine, endLine, silent) {
    var marker, cnt, ch, token,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }
    marker = state.src.charCodeAt(pos++);

    // Check hr marker
    if (marker !== 0x3D/* = */) {
      return false;
    }

    // markers can be mixed with spaces, but there should be at least 3 of them

    cnt = 1;
    while (pos < max) {
      ch = state.src.charCodeAt(pos++);
      if (ch !== marker && !isSpace(ch)) { return false; }
      if (ch === marker) { cnt++; }
    }

    if (cnt < 3) { return false; }

    if (silent) { return true; }

    state.line = startLine + 1;

    token = state.push('hr', 'hr', 0);
    token.attrJoin("style", "border-top:4px double rgba(0,0,0,.1)");
    token.map = [startLine, state.line];
    token.markup = Array(cnt + 1).join(String.fromCharCode(marker));

    return true;
  };
  markdown.block.ruler.before('fence', 'hr-enhanced', hrEnhanced);
}

module.exports = dividerPlugin;
