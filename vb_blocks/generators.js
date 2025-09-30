Blockly.VisualBasic = new Blockly.Generator('VisualBasic');

Blockly.VisualBasic.addReservedWords('VisualBasic');

Blockly.VisualBasic['comment'] = function(block) {
    var text = block.getFieldValue('TEXT');
    return "' " + text + "\n";
};

Blockly.VisualBasic.workspaceToCode = function(workspace) {
    var code = [];
    var blocks = workspace.getTopBlocks(true);
    for (var i = 0; i < blocks.length; i++) {
        var blockCode = Blockly.VisualBasic.blockToCode(blocks[i]);
        if (Array.isArray(blockCode)) blockCode = blockCode[0];
        if (blockCode) code.push(blockCode);
    }
    return code.join('\n');
};
